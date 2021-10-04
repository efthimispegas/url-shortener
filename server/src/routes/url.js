const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const env = require('../config/constants');

const router = express.Router();

// import the Url database model
const Url = require('../models/Url');

/**
 * @route POST /api/url/shorten
 * @description Create short URL
 */

router.post('/url/shorten', async (req, res) => {
  const { longUrl } = req.body;
  // check if base url is valid
  if (!validUrl.isUri(env.BASE_URL)) {
    return res.status(401).json({
      code: 401,
      message: 'INVALID BASE URL',
    });
  }
  // if valid, we create the url code
  const urlCode = shortid.generate();
  // check if provided url is valid
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      // if url exists, return the response
      if (url) {
        res.json(url);
      } else {
        // join the generated short code the the base url
        const shortUrl = env.BASE_URL + '/' + urlCode;
        // Invoke the Url model and save to the DB
        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 500,
        message: 'INTERNAL SERVER ERROR',
      });
    }
  } else {
    res.status(401).json({
      code: 401,
      message: 'INVALID LONG URL',
    });
  }
});

module.exports = router;

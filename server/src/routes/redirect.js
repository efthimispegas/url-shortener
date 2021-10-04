const express = require('express');

const router = express.Router();

// import the Url database model
const Url = require('../models/Url');

/**
 * @route GET /:code
 * @description Redirect to original URL
 */
 router.get('/redirect/:code', async (req, res) => {
  try {
    // find a document match to the code in req.params.code
    const url = await Url.findOne({
      urlCode: req.params.code,
    });
    if (url) {
      // if url is valid, then perform a redirect
      return res.redirect(url.longUrl);
    } else {
      // Otherwise, return a not found 404 status
      return res.status(404).json({
        code: 404,
        message: 'NOT FOUND',
      });
    }
  } catch (err) {
    // exception handler
    console.error(err);
    res.status(500).json({
      code: 500,
      message: 'INTERNAL SERVER ERROR'
    });
  }
});

module.exports = router;

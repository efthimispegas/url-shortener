# Free URL Shortener React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Client Setup
===

Requirements
---
- yarn or npm
- node=15.12.0 *IMPORTANT*

First run the following into the `/client` subdirectory to install dependencies
---
```
yarn
OR
npm install
```

## 1. If you are using Docker you can then run the scripts

```
yarn run docker:build
yarn run docker:run
```
The server container should be up and running now.

## 2. If you are using yarn (or npm) you can run the following for starting up the server

```
yarn run start:server // with yarn
OR
npm run start:server // with npm
```
You should be able to see the following messages in your terminal
**Server started, listening PORT <PORT>**
**MongoDB is up and running!**

## Unit Testing

The tests are under `/cypress/integration`. They are merely testing the app's components core functions and are for showcasing purposes. We could go on infinitely with testing 

Troubleshooting
---

1. If you can't install dependencies right away, please make sure that your machine has node version 15.12.0 installed as it is required for the project to run. You can either install a virtual env manager for the purpose of this project. For more help or ways to achieve this please check out [here](https://github.com/ekalinin/nodeenv).

2. MongoDB authentication failed error
`MongoServerError: bad auth : Authentication failed.`
if that error appears on your terminal that means that the db auth token has expired. For more help on how to resolve this issue please [contact me](mailto:efthimispegas@gmail.com).

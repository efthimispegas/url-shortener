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

## 2. If you are using yarn (or npm) you can run the following for starting up the app

```
yarn start // with yarn
OR
npm start // with npm
```
You should be able to see the web app running at http://localhost:3000

## Testing
Run `yarn run cypress:open` which will open the Cypress IDE for running the specs. Note that you must have the server and client containers already running in order for the tests to succeed.

### 1. Unit Tests
The tests are under `/cypress/integration`. They are merely testing the app's components core functions and are for showcasing purposes. 

### 2. E2E Tests
In the `E2E.spec.tsx` file you can see an example of an end-to-end test that checks the entire flow of our app (along with a request to the API). We could go on infinitely with testing but this is not all there is to life ✍️
  
Troubleshooting
---

1. If you can't install dependencies right away, please make sure that your machine has node version 15.12.0 installed as it is required for the project to run. You can either install a virtual env manager for the purpose of this project. For more help or ways to achieve this please check out [here](https://github.com/ekalinin/nodeenv).


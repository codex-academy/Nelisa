---
layout: default
title: Front-end testing
---

# Front-end testing

Sometimes we want to do UI (User Interface) testing. One thing we can use for this is [DalekJS](http://dalekjs.com/). We'll use it to test that the right pages are there, and that they work as expected.

## Set up DalekJS

DalekJS is available as an npm package, which makes installation convenient for us. Follow [the installation instructions](http://dalekjs.com/pages/getStarted.html#install).

Install the dalek-cli globally ([like we did for the Mocha cli](http://node.projectcodex.co/node-tutorial/index.html)).

```
sudo npm install dalek-cli -g
```

Then install DalekJS locally for your app. Make sure you have a `package.json` before you do. If you don't, set one up now using the `npm init` command.

```
npm install dalekjs --save-dev
```

## Run DalekJS tests

Let's run a small set of tests to see that we've set up our sales routes correctly. Take a copy of the file [`sales_routes.js`](http://nelisa.projectcodex.co/dalekjs/sales_routes.js) and place it in the `tests` folder. Make sure your express server is running, then run your DalekJS tests like this:

```
dalek test/sales_routes.js
```

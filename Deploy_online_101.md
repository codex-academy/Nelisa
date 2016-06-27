---
layout: default
title: Display Data
unitstandard: 115384-SO1-AC1, 115384-SO1-AC2, 115384-SO1-AC3, 115384-SO1-AC4
---

# Deploy online

> Nelisa wants to see her statistics on a web page from her smartphone.

The Heroku deployment process is built on top of git. To deploy there you need to add Heroku as a git remote (so far we've been using GitHub as the origin remote). The Heroku documentation will guide you through the required steps.

**Please note:**

* You applications `package.json` file's `dependencies` sections should contain all the modules your application depends on. So that Heroku knows which modules to install. Installing modules using `npm --save <module_name>` will keep your package.json up to date.

* The `dependencies` section of your application's `package.json` file should contain all the modules your application depends on; Heroku will use it to install your modules. When you're developing your application, installing modules using `npm install --save <module_name>`. This adds the module(s) to your `package.json` so that it's kept up to date.

* Make sure your applications port number is configurable using the `PORT` environment variable. This enables Heroku to change the PORT number your application is started on:

```javascript
//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 5000));
//start the app like this:
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
```

Deploy your Express application online using [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs).

## Testing

Check the console output when you run `git push heroku master`. Where there any errors? Copy, Paste the output (and any notes on what you had to fix) to a new file, `YYYYMMDD-heroku.md`.

# Learning areas

* Web application deployment using [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs);
* How to deploy an [existing NodeJS Web App](https://github.com/heroku/node-js-getting-started) to Heroku.

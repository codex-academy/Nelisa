---
layout: default
title: Display Data
---

# Deploy online

> Nelisa wants to see her statistics on a web page from her smartphone.

The Heroku deployment process is built on top of git. To deploy to ir you need to add a Heroku git repository. The Heroku deployment process will guide you through the required deployment steps.

**Please note:**

* You applications `package.json` file's `dependencies` sections should contain all the modules your application depends on. So that Heroku knows which modules to install. Installing modules using `npm --save <module_name>` will keep your package.json up to date.

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

# Learning areas

* Web application deployment using [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs);
* How to deploy an [existing NodeJS Web App](https://github.com/heroku/node-js-getting-started) to Heroku.

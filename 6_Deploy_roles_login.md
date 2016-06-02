---
layout: default
title: Deployment, roles and login
---

# Who can do what?

> Nelisa only wants some users to be able to add data.

Add support for:

* User logins, only logged in users should be able to use the application;
* user roles:
    * a read-only role - that can only see data;
    * an admin role - that can see and add data;

## Learning areas

* How to use [http-session](http://auth.projectcodex.co/steps/http_sessions.html) for storing logged in username and role;
* using [middleware](http://auth.projectcodex.co/steps/middleware.html) to check :
    * if a user is logged in;
    * a user's roles;
* how to use [bcrypt](https://www.npmjs.com/package/bcrypt) for encrypt user passwords.

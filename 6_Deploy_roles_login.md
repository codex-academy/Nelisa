---
layout: default
title: Deployment, roles and login
unitstandard: 115384-SO1-AC1, 115384-SO1-AC2, 115384-SO1-AC4, 115384-SO3-AC2
---

# Who can do what?

> Nelisa only wants some users to be able to add data.

Add support for:

* User logins, only logged in users should be able to use the application;
* user roles:
    * a read-only role - that can only see data;
    * an admin role - that can see and add data.
* a user management page where admin users can create users and manage user roles;
* encrypted user passwords.

Add some new DalekJS tests to check that users with a read-only role can't see things in the interface that they can't use (like adding and deleting things). you might need to use some new methods like `not` and `notVisible`.

## Learning areas

* How to use [http-session](http://auth.projectcodex.co/steps/http_sessions.html) for storing logged in username and role;
* using [middleware](http://auth.projectcodex.co/steps/middleware.html) to check :
    * if a user is logged in;
    * a user's roles;
* how to use [bcrypt](https://www.npmjs.com/package/bcrypt) to encrypt passwords.

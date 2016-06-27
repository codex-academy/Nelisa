---
layout: default
title: Deployment, roles and login
unitstandard: 115384-SO1-AC1, 115384-SO1-AC2, 115384-SO1-AC3, 115384-SO1-AC4
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

# Testing

* Make sure you're still doing TDD. Use your existing test user `nelisa_test_user` for the admin role. Add a new test user `nelisa_test_readonly_user`, with password `c1ph3r`, for the read-only role.
* Testing **what can't be done** is sometimes as important as testing **what can be done**. Test that:
  * admin role users can see and add data;
  * admin roles users can create and manage user roles;
  * read-only users can see data;
  * read-only users can't add data;
  * read-only users can't create and manage user roles.
* You don't need to test that `bcrypt` works properly, but you do need to test that you are implementing it correctly.

## Learning areas

* How to use [http-session](http://auth.projectcodex.co/steps/http_sessions.html) for storing logged in username and role;
* using [middleware](http://auth.projectcodex.co/steps/middleware.html) to check :
    * if a user is logged in;
    * a user's roles;
* how to use [bcrypt](https://www.npmjs.com/package/bcrypt) to encrypt passwords.

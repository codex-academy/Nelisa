---
layout: default
title: Data beyond a CSV
unitstandard: 115384-SO1-AC1, 115384-SO1-AC2, 115384-SO1-AC4
---

# Data beyond a CSV

> Nelisa needs a more efficient way of storing weekly sales data and profits.

* Create a database for Nelisa to store Products, Categories, Sales and Purchases.
* Add Categories to the database using a [SQL script](http://database.projectcodex.co/steps/running_sql_scripts.html).
* Import weekly sales & purchases files into [MySQL using NodeJS](https://www.npmjs.com/package/mysql), using [bulk insert](http://database.projectcodex.co/steps/mysql_bulk_insert_using_nodejs).
* Add support for showing the Products, Categories, Sales and Purchases from the database in a web browser.

Learn more about databases at [database.projectcodex.co](http://database.projectcodex.co).

# Modules to install

* Node module for [MySQL](https://www.npmjs.com/package/mysql) (to access MySQL from Node.JS).

# Testing

Make sure you write your code TDD-style. For database-related things this can be a bit more fiddly: be careful of sync vs async. Usually we test database things by having a test database and a test user.

At the top of your test file, write some code that creates a database `nelisa_test`, and a user `nelisa_test_user` with password `s33kr1t`. Use these connection details when testing your SQL scripts and JavaScript (instead of testing with the "live" details).

You'll also need to add some test data into your test database. You don't need to add all of the Nelisa data: you just need to use enough data to check that your function works as you expect.

# Learning areas

* setting up MySQL;
* modelling your first Database;
* creating tables and relationships using a [SQL script](http://database.projectcodex.co/steps/running_sql_scripts.html) file;
* adding data to a table using a [SQL script](http://database.projectcodex.co/steps/running_sql_scripts.html);
* [bulk inserting](http://database.projectcodex.co/steps/mysql_bulk_insert_using_nodejs) data into MySQL tables;
* using foreign keys;
* displaying data from a Database in a web browser using Express.

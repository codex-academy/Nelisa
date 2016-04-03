---
layout: default
title: Display data from files
---

# Display data from files online

> Nelisa wants a more up to date weekly online sales report, this report should update when the weekly file change.

Create a web application with a route like `/sales/:week_name` to display sales for a given week online. Sales should be read from the <week_name>.csv file which should be updated daily. The updated sales data should be visible online immediately after the sales file changed.

> `week_name` - is variable name - a route looks like this `/sales/week1`

# Learning areas:

* [Express JS basics](http://expressjs.projectcodex.co)
* Creating [routes](http://expressjs.projectcodex.co/steps/routes.html) in Express
* reusing existing modules

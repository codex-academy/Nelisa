---
layout: default
title: Display data from files
unitstandard: 115384-SO1-AC1, 115384-SO1-AC2, 115384-SO1-AC4, 115384-SO3-AC2
---

# Display data from files online

> Nelisa wants weekly reports that update every day.

<!--codex ignore immediately-->
* Create a web application with a route like `/sales/:week_name` to display sales for a given week. `:week_name` is a variable: the route would look like this `/sales/week1`.
* Sales should be read from the `<week_name>.csv` file, which should be updated daily. The updated sales data should be visible immediately after the sales file changed.
* Set up DalekJS and run the provided [Front-end tests](front_end_testing.html) to check that your routes are working as you expect.

# Learning areas

* [Express basics](http://expressjs.projectcodex.co);
* Creating [routes](http://expressjs.projectcodex.co/steps/routes.html) in Express;
* Code reuse. Use modules you've already created.
* Introduction to Front-end testing with DalekJS.

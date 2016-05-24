---
layout: default
title: Display data from files
---

# Display data from files online

> Nelisa wants weekly reports that update every day.

* Create a web application with a route like `/sales/:week_name` to display sales for a given week. `:week_name` is a variable: the route would look like this `/sales/week1`.
* Sales should be read from the `<week_name>.csv` file, which should be updated daily. The updated sales data should be visible immediately after the sales file changed.

# Learning areas

* [ExpressJS basics](http://expressjs.projectcodex.co);
* Creating [routes](http://expressjs.projectcodex.co/steps/routes.html) in Express;
* Code reuse. Use modules you've already created.

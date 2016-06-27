---
layout: default
title: Display data from files
unitstandard: 115384-SO1-AC1, 115384-SO1-AC2, 115384-SO1-AC4
---

# Display data from files online

> Nelisa wants weekly reports that update every day.

<!--codex ignore immediately-->
* Create a web application with a route like `/sales/:week_name` to display sales for a given week. `:week_name` is a variable: the route would look like this `/sales/week1`.
* Sales should be read from the `<week_name>.csv` file, which should be updated daily. The updated sales data should be visible immediately after the sales file changed.

## Testing

Don't forget to write your code TDD-style. Write tests to check that each of the routes you'll set up returns a HTTP status code of 200. You don't need to check that express work. Check that the code you've written works: there are working routes for each of the four sales URLs.

# Learning areas

* [Express basics](http://expressjs.projectcodex.co);
* Creating [routes](http://expressjs.projectcodex.co/steps/routes.html) in Express;
* Code reuse. Use modules you've already created.

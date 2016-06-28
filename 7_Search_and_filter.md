---
layout: default
title: Search and filter
unitstandard: 115384-SO1-AC1, 115384-SO1-AC2, 115384-SO1-AC4, 115384-SO2-AC1, 115384-SO2-AC4, 115384-SO3-AC2
---

# Search and filter

> Nelisa needs to find sales data statistics quickly.

Create a search bar for your Products page. Once that's working, look at using client-side JavaScript to display the search results after the user has typed three or more characters into the search box.

Read more about searching and Ajax at [search.projectcodex.co](http://search.projectcodex.co/).

## Search more things

Add search bars to your Categories, Sales, and Purchases pages.

Add support for:

* finding products by category name;
* finding sales by product or category name;
* finding purchases by product or category name.

## Front-end testing

Add some more DalekJS tests. You'll need some new methods like `type` and `submit`.

Generate a report of your tests using Dalek's HTML reporter. Run

```
npm install dalek-reporter-html --save-dev
```

Then run all your tests with additional flags, like this:

```
dalek test/*.js -r console,html
```

Open the `index.html` in `report/dalek` to view a QUnit-style web page of your test results.



# Learning areas

* queries using partial string matching using `like` SQL queries;
* using HTTP [request parameters](http://expressjs.projectcodex.co/steps/routes.html#routes-with-parameters) using `req.params`;
* introduction to Ajax for a dynamic search experience;
* introduction to [Progressive Enhancement](https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/) - the journey from a basic search to interactive search.

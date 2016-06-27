---
layout: default
title: Process the data
unitstandard: 115384-SO1-AC1, 115384-SO1-AC2, 115384-SO1-AC3, 115384-SO1-AC4
---

Read about the background at [narrative.projectcodex.co](http://narrative.projectcodex.co/).

# Process the data

> Nelisa would like to analyze weekly records of her sales to understand her business better.

Nelisa would like to find out:

* the most popular product sold each week;
* the least popular product sold each week;
* the most popular category sold each week;
* the least popular category sold each week.

She is also been keeping track of the products she bought each week.

She would also like to calculate:

* the most profitable product for each week;
* the most profitable category for each week.

Write a program that reads the files for each week and print the results to the screen in a format that can be sms'ed to her.

## The data

* [week1.csv](/csv-files/week1.csv)
* [week2.csv](/csv-files/week2.csv)
* [week3.csv](/csv-files/week3.csv)
* [week4.csv](/csv-files/week4.csv)
* [purchases.csv](/csv-files/purchases.csv)

## Things to Remember

* write unit tests using Mocha;
* modularize your code;
* write small focussed functions.

### Testing

* Write your code TDD-style: red, green, clean.
* Every function should have at least one test. Add comments in your app.js to indicate any functions you haven't tested and why. Start the comment with: `NOTEST: `.
* Use `describe`s and `it`s to logically groups your tests. A test for a function will probably only have one `it`. The test might (and probably should) have several `asserts`: you'll want to check your function with a few sets of data.
* The sets of data you use in your tests doesn't have to huge. You *can* use Nelisa's weekly CSV data as input data for your tests, but do you need to use the whole thing? Would testing with a smaller set of that data work as well? What about some other data in the same format?

In **tests** you check that your functions work for small, human-understandable, sets of data. That way, when you use your functions for large, not human-understandable sets of data, you can be confident that your **application** is working correctly.

##  Learning areas

* Data processing algorithms
    * Grouping data
    * Filtering data

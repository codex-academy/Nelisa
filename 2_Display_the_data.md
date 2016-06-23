---
layout: default
title: Display the data
unitstandard: 115384-SO2-AC1, 115384-SO2-AC3, 115384-SO2-AC4, 115384-SO3-AC2
---

# Display the data

> Nelisa wants a comprehensive weekly online sales report.

Publish the sales report online using [GitHub Pages](https://pages.github.com/). Use your Nelisa repository. The URL will be something like `http://username.github.io/repository`.

[Handlebars](https://www.npmjs.com/package/handlebars) templates and layouts can be combined with data to produce HTML files (and other things).

Create:

* HTML reports using Handlebars templates;
* HTML files from the strings created by Handlebars by using Node JS's `fs` module to create files on disk;
* a `.html` file for each week's statistics;
* a homepage called `index.html` that links to each week's file.

## Separate template files

Inline Handlebars templates become cumbersome quickly. A way around that is to store them in separate files and use the `fs` module to read the templates from disk.

## More with Mocha

Mocha has several ways to display the data: [reporters](https://mochajs.org/#reporters). To see which reporters are available, run `mocha --reporters`. To use the `dot` reporter, for example, run `mocha --reporter dot` or `mocha --R dot`. Try a few out and see which one(s) you like.

Now let's save a copy of the tests using the `markdown` reporter. Run a command something like this:

```
mocha --R markdown > YYYYMMDD-results.md
```

This puts the result of `mocha --R markdown` into a file called `YYYYMMDD-results.md`.

## Learning areas

* Templating using Handlebars with NodeJS.
* Creating files with the `fs` module.
* Storing and using Handlebars templates in separate files using the `fs` module.

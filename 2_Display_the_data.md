---
layout: default
title: Display the data
---

# Display the data

> Nelisa wants a comprehensive weekly online sales report.

Publish the sales report online using [GitHub Pages](https://pages.github.com/). Use your Nelisa repository. The URL will be something like `http://username.github.io/repository`.

Create HTML reports using [Handlebars](https://www.npmjs.com/package/handlebars) templates to convert the data into HTML files which can be published online.

Handlebars combine data with a predefined layout/template to make it easy to create HTML (for example). To create HTML files from the strings created by handlebars, use NodeJS's `fs` module to create files on disk. Create a `.html` file for each week's statistics. Create a homepage called `index.html` that links to each week's file.

## Separate template files

Inline handlebar templates become cumbersome quickly, a way around that is to store them in seperate files and use the `fs` module to read the templates from disk.

## Learning areas

* templating using handlebars with NodeJS;
* creating files with the `fs` module;
* storing and using handlebar templates in separate files using the `fs` module.

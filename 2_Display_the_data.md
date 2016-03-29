---
layout: default
title: Display the data
---

# Display the data

> Nelisa wants a comprehensive weekly online sales report.

Publish the sales report online using **GitHub Pages**

Create HTML reports using [Handlebars](https://www.npmjs.com/package/handlebars) templates to convert the data into html files which can be published online.

Handlebars combine data with a predefined layout/template to make it easy to create html for example. To create html files from the strings created by handlebars, use NodeJS's `fs` module to create files on disk. Create a `.html` file for each week's statistics. Create a homepage called `index.html` that link to each week's file.

## Seperate template files

Inline handlebar templates become cumbersome quickly, a way around that is to store them in seperate files and use the `fs` module to read the templates from disk.

## Learning areas:

* templating using handlebars with NodeJS;
* creating files with the `fs` module;
* store & use handlebar templates in seperate files using the `fs` module.


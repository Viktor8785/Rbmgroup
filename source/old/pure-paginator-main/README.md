# pure-paginator
Pure javascript list paginator

Pure Paginator is a simple and lightweight pagination library for your web projects. It provides a convenient way to paginate lists of data on your website.

[VIEW DEMO](https://justklopsi.github.io/pure-paginator/)

## Features

- Easy to integrate into your web projects.
- Customizable design and styling.
- No dependencies, built with pure JavaScript and CSS.

## Install

`npm install pure-paginator`

Add to your project:

```
import { Pagination } from 'pure-paginator';
```
or 

```
const { Pagination } = require('pure-paginator');
```

or for Script Tag: Copy pure-paginator.js from node_modules and include it anywhere in your HTML.

```
<script src="node_modules/pure-paginator/dist/pure-paginator.js"></script>
```


## Usage

- parentElement = The wrapper in which the content should be listed
- paginationElement = The wrapper where the page numbering is inserted
- firstSite = Which page should be displayed first, default "1"
- rowsPerPage = how many rows to display per page, default "10"

```
const pagination = new Pagination(
    document.querySelector(parentElement),
    document.querySelector(paginationElement),
    firstSite,
    rowsPerPage
);
```

### To reindex your current list:

- containsClass - optional class for additional filters

```
pagination.reindexPagination(containsClass);
```

## Customization

For customizations simply adapt [these](pure-paginator.css) styles
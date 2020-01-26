## Webpack react minimal boilerplate
<p align="center">
    <img alt="dependencies" title="dependencies" src="https://img.shields.io/david/hashemkhalifa/webpack-react-boilerplate.svg" >
   <img alt="dependencies" title="dependencies" src="https://img.shields.io/github/last-commit/hashemkhalifa/webpack-react-boilerplate.svg" >
</p>

### Table of contents
[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

````
build/
src/
|- index.jsx _______________________________ # Application entry 
|- App.jsx _________________________________ # Application init
|  |- Components/
|    |- hello-world/ 
|       |- index.jsx _______________________ # Sample component

webpack
|- paths.js ________________________________ # webpack paths needed
|- webpack.common.js _______________________ # common webpack config
|- webpack.dev.js __________________________ # development config
|- webpack.prod.js _________________________ # production config      
````


### Installation

1- Clone the boilerplate repo

`git clone git@github.com:HashemKhalifa/webpack-react-boilerplate.git`

2- `yarn` or `npm install` to install npm packages

3- start dev server using `yarn start` or `npm start`.

3- build and bundling your resources for production `yarn build`.

4- Unit testing will watch all your changes in the test files as well as create coverage folder for you. 
`yarn test`



<p align="center">
    <h3 align="center">Simple React Webpack Babel Starter Kit<br></h3>
</p>


<p align="center">
  Tired of complicated starters with 200MB of dependencies which are hard to understand and modify? This is for you!
  This is a simple react application without redux, stylesheets or other set frameworks. It's only meant to get you started and the rest if up to you. Our goal for is to keep things simple and give you the freedom to select your own frameworks to add on top of this one.
</p>


<div class="center">
  [![Dependency Status](https://img.shields.io/david/ReactJSResources/react-webpack-babel.svg)](https://david-dm.org/dylang/npm-check)
</div>  


### Demo
https://murmuring-fjord-36537.herokuapp.com/

### Prerequisites
* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.

### To run
* Fork and clone the project:

```
git clone https://github.com/ReactJSResources/react-webpack-babel.git
```

* Then install the dependencies:

```
npm install
```

* Run development server:

```
npm run dev
```

Open the web browser to `http://localhost:8080/`

### To test
To run unit tests:

```
npm run test
```

### To build the production package
```
npm run build
```

### Eslint
There is a `.eslintrc.js` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
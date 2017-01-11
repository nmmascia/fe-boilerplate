## getting started

* `yarn` to install dependencies
* `npm start` to run development server on port 3000
  * `PORT=3001 npm start` to change the default port
* application entries
  * `src/index.jsx` - entry point for application
  * `src/Root.jsx` - entry point for react, react router and redux

---
## useful npm commands

* `npm run lint` to lint source code
* `npm run flow` to check type annotations
* `npm run test` to run unit tests
* `npm run build` to create production build of source code in `/dist`
* `./node_modules/.bin/<eslint | flow | mocha> pathToFile.js` to run above commands over single file

---
## important libraries documentation

`npm list` to see a full list of dependencies and versions

##### javascript
* [react](https://facebook.github.io/react/) - view components
* [redux](http://redux.js.org/) - state management
* [redux thunk middleware](https://github.com/gaearon/redux-thunk) - async redux actions
* [react router v4](https://react-router.now.sh/) - routing

##### css
* [css modules](https://github.com/css-modules/css-modules) - scoped css
* [postcss](https://github.com/postcss/postcss) - css preprocessor

##### unit testing
* [jest](https://facebook.github.io/jest/) - jest test framework
* [enzyme](https://github.com/airbnb/enzyme) - unit test utilities for react

##### linting and type annotations
* [flow](https://flowtype.org/) - type annotations
* [eslint](http://eslint.org/) - linting documentation
* [airbnb eslint](https://github.com/airbnb/javascript) - airbnb rules for eslint
* [airbnb eslint config](https://www.npmjs.com/package/eslint-config-airbnb) - npm package for airbnb's eslint

##### build and development tools
* [webpack](https://webpack.js.org/) - module bundler and loaders
* [babel](https://babeljs.io/) - source code transpilation
* [redux devtools](https://github.com/gaearon/redux-devtools) - replaying actions
* [redux logger](https://github.com/evgenyrodionov/redux-logger) - logging actions in browser console
* [react hot loader 3](https://github.com/gaearon/react-hot-loader) - [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html) for react classes and functional components

##### package manager
* [npm](https://docs.npmjs.com/) - npm
* [yarn](https://yarnpkg.com/en/docs/) - yarn

---
## boilerplate todos
- [x] add `webpack.config.prod.js` to `cfg` directory
- [ ] add [documentation.js](https://github.com/documentationjs/documentation) to generate docs from flow annotations or JSDoc annotations
- [ ] update to webpack v2

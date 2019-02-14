# React Search Platform Boilerplate

This is a react app that can be used as a boilerplate for creating a frontend search app connected to CRUK Search Product.
Webpack with babel is used for code bundling and transpiling. Karma with Jasmine is used for the tests.

## Requirements
 - node 8.x
 - yarn

## How to use
This application has 2 modes, development and prod.

First run `yarn` to install all dependencies.

#### Development
Run `yarn start` and visit http://localhost:5678 to see the app.

Development mode runs on a local node server with hotloader installed, which means that any code change will trigger a page reload.

To run tests run `yarn test`.

#### Production
For production environment this app will bundle all of the code into a bundle.js file along with any styles.css and font files and store it in the /dist folder.

Run `yarn build` and check the /dist folder for the bundled files.

Note that for prod be sure that the variable CRUKSearchConfig from index.jsx is setup correctly as it will have different values than development mode.

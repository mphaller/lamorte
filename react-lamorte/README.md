# La Morte - React

[La Morte](https://github.com/mphaller/lamorte) implemented in [React](https://reactjs.org/)/[Redux](https://redux.js.org/).

## Usage Scripts

Package manager is [Yarn](https://legacy.yarnpkg.com/en/).

### yarn install

Installs all dependencies.

### yarn test

Runs unit tests. Testing framework is [Jest](https://jestjs.io/) with [Enzyme](https://airbnb.io/enzyme/). Test compliation is [Babel](https://github.com/babel/babel) via [Babel-Jest](https://github.com/facebook/jest/tree/master/packages/babel-jest).

Includes options: 
* `test:watch` runs in continuous watch mode.
* `test:coverage` generates a coverage report after running.
* `test:snapshots` refreshes snapshot tests after running.

### yarn start

Opens a local dev server.

### yarn build

Produces a production build in `/build`.

# Bill Test

A small web application to display a bill to a customer.
The server is written in node using expressjs, the ui is written with Reactjs.

All commands need to be run from the `node` directory

## Pre-requisites

Required node version is `8.9.4` is if you use nvm there is a .nvmrc file, just run the below install the correct version of node. If not then you will need to install the required version.

```
nvm install
```

To setup up the project and its dependencies please run

```
npm install
```

Now you can build and run the code

## Building the code

The project uses gulp to transpile the javascript and organise files. This will run the tests and build the code

```
npm run-script build
```

## Tests and coverage

To run the tests and coverage outside of a full build, use the below commands, this will run the tests and test coverage which provides a table showing how well the tests cover the source code

```
npm run-script test
npm run-script test-coverage
```

## Running the server

To run the built code, just run the following command in the node directory

```
npm run-script start
```

### Note

I noticed the summed total of each section was a different value to the total at the root of the data, I'm not sure if this was deliberate but i've just displayed the values in the data.

This was developed using Chrome but should be fine on any modern browser.
 
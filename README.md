# Chuck Norris Api - Full Stack App

This Single Page Application displays a list of categories in an accordion format. Upon clicking a category, a request is made to fetch a random Chuck Norris joke in that category.

## Client Technologies

This project makes uses:
  - create-react-app
  - Apollo Client v3 (@apollo/client)
  - GraphQL
  - Typescript
  - Styled Components

## Server side Technologies

This project makes uses:
  - nodejs v14.15.3
  - apollo-server
  - GraphQL
  - Nodemon


## How to start the project

 - clone this project
 - Run `npm start` in the root folder
### `npm start`

This command will launch both the client and the server app in the development mode on [http://localhost:3000](http://localhost:3000) and [http://localhost:4000](http://localhost:4000) respectively.

## Other Available Scripts

In the project directory, you can run:
#### `npm run client`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run server`

Runs the server in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## CodeSandbox
You can find codesandbox version at [https://codesandbox.io/s/github/ZeeshaanMaudar/chuck-norris](https://codesandbox.io/s/github/ZeeshaanMaudar/chuck-norris)

Since it is running both the server graphql and the client, codesandbox chooses the server one by default as the main view to show. However, upon first launching the link or a quick refresh, a pop up will notify the following: 

`Port 3000 Opened
The server is listening on port 3000, do you want to open it?`

Click on `Open Browser Pane` and the client side will be available for preview.

Alternatively, fork the project on codesandbox, then navigate to Server Control Panel. Then under Open Ports, select the `3000` one.


## Very Important Note

In the description for this project, it is instructed to use Apollo Client (`react-apollo`) and to integrate it with `redux`.
However, `react-apollo` is now deprecated and the newer version that I used (`@apollo/client`) does not require the need for redux if choosing to work with `@apollo/client`. I did not want to query with graphql and store it in redux, which will result in duplicated data as `@apollo/client` already has its own internal 'redux' store.

Find out more about the deprecated `react-apollo` [here](https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/#react-apollo).

Another note about `react-apollo` is that I found that there used to be a way for it to be integrated with Redux. The docs for that can be found at [https://s3.amazonaws.com/apollo-docs-1.x/redux.html](https://s3.amazonaws.com/apollo-docs-1.x/redux.html).
 However, even that documentation refers to version 1 of `react-apollo` while the latest version is now on v3, and works differently.

Hence the decision to leave `redux` out for this project.

In order to display my knowledge of `redux` and not run away from it, I have chosen to build an exact replica of this project, but this time only using react and redux to meet the requirements.

You can find the link to the front end react and redux application at [https://github.com/ZeeshaanMaudar/chuck-norris-redux](https://github.com/ZeeshaanMaudar/chuck-norris-redux)

Its respective codesandbox link can be found at [https://codesandbox.io/s/github/ZeeshaanMaudar/chuck-norris-redux](https://codesandbox.io/s/github/ZeeshaanMaudar/chuck-norris-redux)

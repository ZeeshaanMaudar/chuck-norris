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

## Available Scripts

In the project directory, you can run:

### `npm run dev`

This command will launch both the client and the server app in the development mode on [http://localhost:3000](http://localhost:3000) and [http://localhost:4000](http://localhost:4000) respectively.

#### `npm run client`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run server`

Runs the server in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.


## Very Important Note

In the description for this project, it is instructed to use Apollo Client (`react-apollo`) and to integrate it with `redux`.
However, `react-apollo` is now deprecated and the newer version that I used (`@apollo/client`) does not require the need for redux together. I did not want to query with graphql and store it in redux, which will result in duplicated data as @apollo/client already has its own internal 'redux' store.

Find out more about the deprecated `react-apollo` [here](https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/#react-apollo).

Another note about `react-apollo` is that I found that there used to be a way for it to be integrated with Redux. However, that
was a much older version, i.e, v1. It is now on v3.

Hence the decision to leave `redux` out for this task.



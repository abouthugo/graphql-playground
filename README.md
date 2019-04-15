The start of something really cool! This repo will be mainly used to practice GraphQL and have a codebase to refer to if I stop for a while and want to jump back in.

## Available Scripts

To run the API:
#### `yarn start | npm start` 

## :warning: Watch out! 

Don't forget to install the dependencies by running **`npm install`** and also include a file named `.env` and include the following:

```shell
PORT=8080
DB_USERNAME=
DB_PASSWORD=
DB_HOST=
```

> Note: my mongodb instance is hosted by MLab so if you try to reuse this code make sure you do the appropriate changes on how you communicate with your database. Mainly look at [`schema/index.js`](schema/index.js)
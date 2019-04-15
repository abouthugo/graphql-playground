import express from 'express';
import graphqlHTTP from 'express-graphql';
import * as db from '../models'
import schema from '../schema';
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
})
import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js'
import colors from 'colors'

import { config } from 'dotenv'
import {connectDB} from "./config/db.js";
config()
const port = process.env.PORT || 5000

const app = express()

connectDB()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => console.log(`Server running port: ${port}`))

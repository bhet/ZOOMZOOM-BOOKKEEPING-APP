const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mongodb
mongoose.connect('mongodb://localhost/camBhetReg');
const db = mongoose.connection;
db.once('open', ()=> console.log("connect to mongodb"))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
  //graphiql: process.env.NODE_ENV === 'development'
}));


app.listen(4000, ()=>{
  console.log('Listening on port 4000');
});

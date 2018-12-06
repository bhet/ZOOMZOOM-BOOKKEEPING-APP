const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const JWT_SECRET = require('./secretKey')

const app = express();
app.use(bodyParser.json());

//authentication middleware
const authMiddleware = jwt({
  secret: JWT_SECRET,
  credentialsRequired: false
});
app.use(authMiddleware);

app.use(cors());



//connect to mongodb
mongoose.connect('mongodb://localhost/camBhetReg', { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', ()=> console.log("connect to mongodb"))



// function checkToken(req, res, next) {
//   let token
//
//   console.log("Bearer",req.headers.authorization)
//   // if(req.query && req.query.hasOwnProperty('access_token')){
//   //   token = req.query.access_token
//   // }else if(req.headers.authorization.includes('Bearer')){
//   //   token = req.headers.authorization.split(' ')[1]
//   // }
//   // return Promise((resolve, reject) =>{
//   //   jwt.verify(token, JWT_SECRET, (error, decoded)=>{
//   //     if(error) reject('401: User is not authenticated')
//   //     resolve(decoded)
//   //   })
//   // })
//   next();
//   // if the token is invalid figure out how to let the front end know
// }

var root = {
  ip: function (args, request) {
    console.log("args", args)

    return request.ip;
  }
};
//app.use(checkToken)
app.use('/graphql',  graphqlHTTP(req =>({
  schema: schema,
  rootValue: root,
  graphiql: true,
  context: {
    user: req.user
  }
})));


app.listen(4000, ()=>{
  console.log('Listening on port 4000');
});

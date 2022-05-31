const express = require('express')
const bodyParser = require('body-parser');


const userRoute = require('./routes/user')
const postsRoute = require('./routes/post')

const app = express();

app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send("Welcome to My login")
});

app.use("/posts", postsRoute);
app.use("/user", userRoute);

module.exports = app;

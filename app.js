const express = require('express')
const bodyParser = require('body-parser');


const userRoute = require('./routes/user')
const postsRoute = require('./routes/post')
const imageRoute = require('./routes/images')


const app = express();

app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

app.get('/', (req,res)=>{
    res.send("Welcome to My Post & login")
});

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/images", imageRoute);


module.exports = app;

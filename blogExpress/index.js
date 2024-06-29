const express = require('express')
const app = express()

import { engine } from 'express-handlebars';


const path  = require('path')
const port = 5000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'routes/blog')))

// respond with "hello world" when a GET request is made to the homepage


app.listen(port, ()=>{
    console.log("app is listening on port ", port)
})
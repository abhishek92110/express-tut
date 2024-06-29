const express = require('express')
const app = express()
const path  = require('path')
const port = 5000

app.use(express.static(path.join(__dirname,"public")))

// respond with "hello world" when a GET request is made to the homepage
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"))
})
app.get('/about/:name', (req, res) => {
  res.send(" hello " + req.params.name)
})

app.listen(port, ()=>{
    console.log("app is listening on port ", port)
})
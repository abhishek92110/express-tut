const express = require('express')
const path = require('path')
const router = express.Router()
const blog = require('../blogpost/allblog')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../views/index.html'))
    res.render('home')
})

router.get('/blog',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/blogHome.html'))
})
router.get('/blog/:slug',(req,res)=>{
    console.log("slug =",req.params.slug)
    let myBlog = blog.filter(data=>{
        return data.slug == req.params.slug
    })

    console.log('slug page =',myBlog)
    res.sendFile(path.join(__dirname,'../views/blogHome.html'))
})

module.exports = router
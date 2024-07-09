const express = require("express")
const router = express.Router()


//Routes

//home
router.get(``, (req, res)=>{
    const locals = {
        title: "Nodejs blog",
        description: "Simple Blog with nodejs",
        name: "Jamol",
        surname: "Isaboyev"
    }


    res.render('index', locals);
})



//about
router.get(`/about`, (req, res)=>{
    res.render('about');
})



module.exports = router
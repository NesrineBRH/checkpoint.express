const express=require('express')
const router= express.Router()

router.get('/routes',(req,res)=>{
res.render('Views/home')
res.send("user list")
})

module.exports=router
const express=require('express')
const path=require('path')
const app=express()
app.get('/index',(req,res)=>{
    res.redirect('list')



})

app.listen(9999, ()=>{
     console.log('http://localhost:9999','服务器已响应')
})
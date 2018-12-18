const express=require('express')
const app=express()
const path=require('path')
// app.use((req,res)=>{
//     // console.dir(app.path);
//     res.sendFile(path.join(__dirname,'pages',req.url))
//
//
// })


app.use('/pages',express.static('pages'))


app.listen(9999,()=>{
     console.log('http://localhost:9999/pages/index.html','服务器已响应')


})
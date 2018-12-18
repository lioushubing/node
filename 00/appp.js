const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use((req,res)=>{
    // let str=req.query
    // console.log(str);
    // res.end('ok')
   // let str=req.body
    console.log(req.body);

    res.end('ok')
})

app.listen(9999, console.log('http://localhost:9999','服务器已响应'))
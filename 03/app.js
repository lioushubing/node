const express=require('express')
const app=express()

app.use((req,res,next)=>{
    console.log('中间件1监听到了请求');
   res.a='jjj'
   res.b=()=>{
       console.log('hh');
   }
    next()


})


app.use((req,res,)=>{
    console.log('中间件2监听到了请求');
     res.b()
    res.send(res.a)

})


app.listen(9999,()=>{

     console.log('http://localhost:9999','服务器已响应')

})
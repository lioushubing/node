// 模拟req-query req.body
// 测试耳机的解析度【耳机福利】
const express=require('express')
const url=require('url')
const queryString=require('querystring')
const app=express()
// 模拟req-query
app.use((req,res,next)=>{
    req.query1=url.parse(req.url,true).query
    next()

})



app.use((req,res,next)=>{
    let info=''
    req.on('data',(a)=>{
        info+=a
     req.on('end',()=>{
        req.body1=queryString.parse(info)
         next()
     })
    })

app.use((req,res)=>{
    console.log(req.body1);
    console.log(req.query1);


    res.send('ok')
})

})









app.listen(9999,()=>{
     console.log('http://localhost:9999','服务器已响应')

})

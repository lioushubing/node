const express=require('express')
const path=require('path')
const app=express()

app.engine("html",require('express-art-template'))
app.set('views','./')
app.use((req,res)=>{

    let obj={
        title: '传智帅哥',
            list: [
            '飞飞',
            '鹏鹏',
            '小马哥',
            '聪聪',
            '老罗',
            '涛涛',
            '玺哥哥',
            '芳芳',
            '春哥'
        ]
    }
    res.render(path.join('index.html'),obj)
// res.

})









app.listen(9999,()=>{
     console.log('http://localhost:9999','服务器已响应')


})
const express=require('express');
const app=express();
const path=require('path');
app.use('/elements',express.static(__dirname+'/public'))
app.listen(process.env.PORT||3000,()=>console.log('Servidor operando correctamente'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/ingresa.html'))
})
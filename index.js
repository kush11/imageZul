const express=require('express')
const mongoose=require('./mongoose');
const bodyParser = require('body-parser')
const app=express();
const path=require('path')

app.use('/image',express.static(__dirname+'/assets'));
app.use(express.static(__dirname+'assets'))
app.use('/imageAi',express.static(__dirname+'/A1'));
app.use('/static', express.static(path.join(__dirname, '/A1')))

app.use(bodyParser.json())

mongoose.Promise=global.Promise;

app.get('/',(req,res)=>{
    res.send('Connected')
})

const PORT=process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server Started on Port ${PORT}`);
});
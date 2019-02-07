const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

mongoose.connect('mongodb://zulimage:password123@ds251240.mlab.com:51240/zulimage').then(()=>{
    console.log("DB Connectes");
}).catch(err=>{
    console.log(err)
})

module.exports=mongoose;
const express = require('express');
const app = express();
const PORT=process.env.PORT || 3000;

console.log('Node app is operational ....>');

app.get('/',(req,res)=>{
 res.send('Hello world express station, .. Pakistan Zindabad')

});
app.get('/status',(req,res)=>{
 res.json({status:'ok', timestamp:new Date()});

});

app.listen(PORT,()=>{

    console.log(`server is running on port ${PORT}`);
});
const express = require('express');
const app = express();



app.get('/', function (req, res) {
    // res.send('Hello World')
    res.sendFile(__dirname+'/index.html');
});

app.get('/about', (req,res)=>{
    res.sendFile(__dirname+'/about.html')
})

app.listen(3000);

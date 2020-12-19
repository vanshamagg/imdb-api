const load = require('dotenv').config();
if(load.error) {
    throw load.error;
}

const db = require('./models')
const express = require('express');
const app = express();



app.use('/api', require('./routes'))
app.get('/', (req, res)=> {
    res.json({message: "Yo Hi"});
})

app.post('/', ( req, res)=> {
    console.log(req.body)
    res.end();
})



app.listen(process.env.PORT, _ => console.log(`Server Started Guys! at ${process.env.PORT}`));



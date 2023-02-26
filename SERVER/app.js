const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = 5000;

const mongoose = require('mongoose');

app.use(express.json());

dotenv.config();
const mongourl = process.env.MONGO_URL;

mongoose.connect(mongourl)
mongoose.set('strictQuery',false);

mongoose.connection.on('connected' , () => {
    console.log('Connected to database ');
})

mongoose.connection.on('error' , (err) => {
    console.log(' Error !!!!! ',err);
})



app.get('/' , (req,res) => {
    res.send('  Hello Here ')
})

app.listen(PORT , () => {
     console.log(`Server is Running on PORT ${PORT} ..`);
})
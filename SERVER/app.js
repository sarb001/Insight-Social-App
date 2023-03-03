const express = require('express');
const dotenv = require('dotenv');
const app = express();
const PORT = 5000;

const mongoose = require('mongoose');
app.use(express.json());

require('./Models/User')            // name,email,pass
require('./Models/Post')            


app.use(require('./Routes/auth'));
app.use(require('./Routes/post'));
app.use(require('./Routes/user'));


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
    res.send('  Hello Here ff')
})

app.listen(PORT , () => {
     console.log(`Server is Running on PORT ${PORT} ..`);
})
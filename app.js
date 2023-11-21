const express = require('express');
const path= require('path');
const mysql = require('mysql');
const app = express();
const port = 5050;
const dotenv = require('dotenv');

dotenv.config({path: './env'})


const db  = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

})

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory))

// parse URL.encoded badies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false}));
// parse JSON badies (as sent by API clintes)
app.use(express.json());

app.set('view engine', 'hbs');

db.connect( (error)=>{

if(error){
    console.log(error)
}else{
    console.log("my sql ist connected")
}
})

//define Routes
app.use('/', require('./routes/Pages'));



app.listen(port,()=>{
    console.log("Server is running on port 5050 klick hier http://localhost:5050/")
})

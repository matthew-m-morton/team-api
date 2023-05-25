const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/landon', (req,res) => {res.send("Hello Landon")});

app.listen(port, ()=>console.log("Listening"));
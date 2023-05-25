const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/landon', (req,res) => {res.send("Hello Landon")});

app.get('/samantha', (req,res) => {res.send("Hello Samantha")});

app.listen(port, ()=>console.log("Listening"));
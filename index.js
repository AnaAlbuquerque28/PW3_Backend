const express = require('express');
const cliente = require('./route/cliente');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('teste de github');

app.use('/', cliente );

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO - EM http://localhost:3000 ');
});


const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.get('/', (req,res)=>{
    axios.get('http://data.fixer.io/api/latest?access_key=ee921429d652d4f6bed12e303055cb03&base=USD&symbols=GBP,JPY,EUR')
    .then(response => {
      const resources = response.data;
      console.log(resources)
  //    res.render('index', { resources });
    })
    .catch(error => {
  //    res.render('error', { error });
    });   
})
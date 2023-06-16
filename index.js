const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/', (req,res)=>{
  res.render('dynamic');  
})
app.get('/pokemon/:id', (req,res)=>{
  const pokemonId = req.params.id;
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response => {
      const resources = response.data;
      res.render('detail', { resources });
    })
    .catch(error => {
      res.render('error', { error });
    });   
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
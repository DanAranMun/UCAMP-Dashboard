const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.get('/', (req,res)=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/6')
    .then(response => {
      const resources = response.data;
      console.log(resources)
  //    res.render('index', { resources });
    })
    .catch(error => {
  //    res.render('error', { error });
    });   
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
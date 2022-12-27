const axios = require("axios");
async function getPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  try {
   /*  const data = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(data.response); */
   const data= await axios.get("https://pokeapi.co/api/v2/pokemon", {
     headers: { "Accept-Encoding": "gzip,deflate,compress" },
   });
      console.log(data.data);
  } catch (error) {
    console.log(error.message)
  }
  
}

module.exports = { getPokemons };
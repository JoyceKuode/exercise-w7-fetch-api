// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

// "pokemon": "https://pokeapi.co/api/v2/pokemon/",
const BASE_URL = "https://pokeapi.co/api/v2"

let pokemon = "pokemon"

const URL = `${BASE_URL}/${pokemon}`
console.log(URL)

// DOM Selectors
const image = document.getElementById("image");
const name = document.getElementById("name");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

// 1) Start with updating the fetchPokemons function so that
//    it's fetching the pokemons from the pokemon endpoint and
//    logs the results in the console.
//    HINT --> Don't forget to invoke the function

const fetchPokemons = () => {
  /*Fetch all pokemons here*/
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      // 1. console.log(data)
      // 2a.console.log(data.results)
      // 2b. console.log(data.results[0])
      // 2.c console.log()
      // data.results
      const pokemons = data.results

      pokemons.forEach(pokemon => {
        console.log(pokemon.name)
      })

    })

};

// fetchPokemons()

// 2) a) As you can see, we get some metadata as well as
//    the results of the fetch. Change the console.log so
//    that you only log the array of pokemon objects.

//    b) Log only the name of the first pokemon in the
//    pokemon objects array

//    c) Log the names of all pokemons in the array

// 3) You might know that there are more than 20 pokemons
//    in the pokedex. Add a query parameter
//    called "limit" to the URL, and set it to a number of your
//    choice, like this: https://pokeapi.co/api/v2/pokemon/?limit=151
//    and pick a pokemon that you would like to continue
//    working with. Copy the pokemon's URL.

const URL_BULBASAUR = `${URL}/1/`
console.log(URL_BULBASAUR)

// 4) Now that we've picked a pokemon, we will do a new fetch
//    to the URL we copied. Since that's another endpoint,
//    we will create a new fetch inside the fetchBulbasaurData
//    function (change the function's name to fit your pokemon).
//    Log the data in the console and see what you find.

const fetchBulbasaurData = () => {
  /*Fetch singular pokemon here*/
  fetch(URL_BULBASAUR)
    .then(response => response.json())
    .then(data => {
      image.src = data.sprites.front_default

      console.log(data)
      updateHTML(data)
    })
};
fetchBulbasaurData()

// 5) After familiarizing with the data, we will use the data
//    to change our table. We will give you the image as a start.
//    If you named the data something else than json, you change the
//    word json below so it corresponds with your code. Here goes:
//    image.src = json.sprites.front_default;
//    Copy that line into the fetchBulbasaurData and hopefully
//    the image in the HTML updates.

// 6) Update the innerHTML of the other rows as well after
//    you've found the correct path in the json.
//    HINT --> Log stuff in the console to try things out
//    HINT --> If it's an array - map over the array
const updateHTML = (data) => {
  console.log(data)

  const pokemonName = data.name
  const pokemonWeight = data.weight
  const pokemonHeight = data.height
  const typesList = data.types.map(typeObject => typeObject.type.name)

  //Display multiple types/names: 
  //const typeNames = data.types.map(typeObj => typeObj.type.name);  // Map the whole array
  //types.innerHTML = typeNames.join(", ")


  console.log(name)
  name.innerText = pokemonName
  weight.innerText = pokemonWeight
  height.innerText = pokemonHeight
  console.log(typesList)

  types.innerHTML = typesList.join(", ")

}

// ***BONUS***
// Check out the API's documentation and try to fetch from another
// endpoint! There are many - as you can see in the first link


const URL_SPECIES = `${BASE_URL}/pokemon-species/`

console.log(URL_SPECIES)


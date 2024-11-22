const TOTAL_POKEMONS = 151;
const TOTAL_PAGES = 5;

( async () => {

  const fs = require('fs');

  // Pokémons por Ids
  const pokemonIds = Array.from({ length: TOTAL_POKEMONS }, (_, i ) => i + 1 );
  let fileContent = pokemonIds.map(
    id => `/pokemons/${ id }`
  ).join('\n');

  // Paginas de Pokémons
  // const pokemonPageIds = Array.from({ length: TOTAL_PAGES }, (_, i ) => i + 1 );
  // let fileContentPages = pokemonPageIds.map(
  //   id => `/pokemons/page/${ id }`
  // ).join('\n');

  // Por nombres de Pokémons
  const pokemonNameList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ TOTAL_POKEMONS }`)
    .then( res => res.json() );

  fileContent += '\n';
  fileContent += pokemonNameList.results.map(
    pokemon => `/pokemons/${ pokemon.name }`
  ).join('\n')

  //var allroutes = fileContent.concat('\n' + fileContentPages);

  fs.writeFileSync('routes.txt', fileContent);

  console.log('routes.txt generated');

})();

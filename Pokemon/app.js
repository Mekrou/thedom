const pokemonContainer = document.querySelector('.container');

for (let i = 1; i < 1000; i++)
{
    const pokemon = document.createElement('img');
    pokemon.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i.toString() + '.png';
    console.log(pokemon.src);
    pokemonContainer.appendChild(pokemon);
}

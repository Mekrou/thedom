const pokemonContainer = document.querySelector('.container');

for (let i = 1; i < 150; i++)
{
    const pokemon = document.createElement('span');
    pokemon.classList.add('pokemon')

    const sprite = document.createElement('img');
    sprite.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i.toString() + '.png';

    pokemon.appendChild(sprite);

    const indexEl = document.createElement('span');
    indexEl.innerText = i;

    pokemon.appendChild(indexEl);

    pokemonContainer.appendChild(pokemon);
}

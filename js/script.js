const btnSearch = document.getElementById("btnSearch");
const inputPokemonName = document.getElementById("pokemonName");
const pokemonInfo = document.getElementById("pokemonInfo");

btnSearch.addEventListener("click", async () => {
    pokemonInfo.innerHTML = "searching pokemon..."
     searchPokemon(inputPokemonName.value.toLowerCase());
});

async function searchPokemon(nombre) {

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!response.ok) {
            throw new Error("Pokemon not found");
        }//END IF
        const data = await response.json();
        displayPokemonInfo(data);
    } catch (error) {
        pokemonInfo.innerHTML = "Pokemon not found";
    }//END TRY CATCH
}//END serchPokemon

function displayPokemonInfo(data) {
    pokemonInfo.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Types: ${data.types.map(type => type.type.name).join(", ")}</p>
    `;
}//END FUNCTION
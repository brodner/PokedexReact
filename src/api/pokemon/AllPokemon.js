const countPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(rawData => rawData.json())
    .then(json => json.count)
}

const allPokemonName = async () => {
  const totalPokemon = await countPokemon().then(total => total)
  const namePokemos = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${totalPokemon}`)
    .then(Pokemons => Pokemons.json())
    .then(({ results }) => results.map(({ name }) => name))
    .then(result => result)
  return await Promise.all(namePokemos)
}

export default allPokemonName

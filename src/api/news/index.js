import data from './data'
const fromApiPokemonNews = apiResponse => {
  if (Array.isArray(apiResponse)) {
    console.log(apiResponse)
    return apiResponse
  }
  return []
}

export default function News () {
  return fromApiPokemonNews(data)
}

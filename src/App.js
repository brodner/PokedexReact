import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from './pages/inicio'
import Pokedex from './pages/pokedex'
import PokemonInfo from './pages/PokemonInfo'
import Error404 from './pages/404'
import SearchPokemon from './pages/searchPokemon'

function App () {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/Pokedex' exact component={Pokedex} />
          <Route path='/PokemonInfo/:pokemon' exact component={PokemonInfo} />
          <Route path='/searchPokemon/:pokemon' exact component={SearchPokemon} />
          <Route path='*' component={Error404} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inicio from './pages/inicio'
import Pokedex from './pages/pokedex'
import PokemonInfo from "./pages/PokemonInfo";

function App() {
    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route exact path='/pokedex'>
                        <Pokedex />
                    </Route>
                    <Route exact path='/pokemoninfo/:id'>
                        <PokemonInfo />
                    </Route>
                    <Route>
                        {<h1>404</h1>}
                    </Route>
                </Switch>
            </BrowserRouter>
        </div >
    );
}

export default App;

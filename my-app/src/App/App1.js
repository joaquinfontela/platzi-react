import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Traemos los componentes de los que hablamos en la clase anterior.
// Switch solo renderiza una ruta por vez (sino React Router muestra varias paginas una abajo de la otra).

import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
// Nos traemos Badge y BadgeNew aca.

// Creamos la clase (App) de una manera un poco distinta.
/* El Switch de afuera de todo es porque BrowserRouter solo puede tener un 'child'
(y por lo explicado arriba, sino tambien podria ser un div).*/
function App() {
    return (
        <BrowserRouter>
            <Switch>   
                <Route exact path='/badges' component={Badges}/>
                <Route exact path='/badges/new' component={BadgeNew}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
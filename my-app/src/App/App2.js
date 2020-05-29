import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import NotFound from '../pages/NotFound'

// Agregamos el componente notFound en las Rutas, para cuando ninguna se ejecuta, es el error 404.

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>   
                    <Route exact path='/badges' component={Badges}/>
                    <Route exact path='/badges/new' component={BadgeNew}/>
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
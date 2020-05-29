import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App'

// Me traigo un nuevo componente, el nuevo principal, Badges.

const container = document.getElementById('app')

ReactDOM.render(
    <App/>, container
)
//Ahora renderizamos Badges.



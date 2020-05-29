import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
// Traemos bootstrap, que tambien nos ayuda con estilos predeterminados.
import './global.css'
// Traemos estilos globales, para usar en toda la app.

import Badge from '../components/Badge'

const container = document.getElementById('app')

ReactDOM.render(<Badge/>, container)



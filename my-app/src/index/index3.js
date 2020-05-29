import React from 'react';
import ReactDOM from 'react-dom';
 
import Badge from '../components/Badge'
// Importamos el componente en cuestion, es una buena practica que cada componente este en un archivo distinto.

const container = document.getElementById('app')

ReactDOM.render(<Badge/>, container)
// A render hay que pasarle un elemento.



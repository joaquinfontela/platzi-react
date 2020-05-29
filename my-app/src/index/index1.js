import React from 'react';
// Importamos React
import ReactDOM from 'react-dom';
// Y react DOM

const element = <h1>Hello Platzi Badges!</h1>
//JSX
//Es como hacer, const element = document.createElement('h1'), pero con mejor sintaxis gracias a React.

const container = document.getElementById('app')

ReactDOM.render(element, container)
// Aca estamos haciendo aparecer a element, dentro de container, gracias a ReactDOM.
// Esto es lo mismo que container.appendChild(element).


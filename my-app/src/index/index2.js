import React from 'react';
import ReactDOM from 'react-dom';

const webPageName = 'Platzi'
const jsx = <h1>Hello {webPageName} Badges!</h1>
// Podemos introducir valores de variables asi.
/* O cualquier expresion de JS (por ejemplo una operacion aritmetica, una llamada a una funcion, etc), 
mientras lo hagamos dentro de las llaves. */
// Si las expresiones terminan dando un valor Falsie (undefined, null, etc), no se muestran.

const element = React.createElement(
  'a',
  {href: 'https://www.platzi.com'},
  'Ir a Platzi'
)
/* Esta seria la manera de hacer una insercion al HTML con React.createElement, pero queda muy feo cuando hay 
muchos elementos uno adentro de otro (un body, adentro un div, adentro de este otro, adentro una URL, etc).
En cambio en JSX queda mucho mas claro, porque la sintaxis es la de HTML. */

// Un ejemplo seria el siguiente:

const element2 = React.createElement(
  'div',
  {},
  React.createElement(
    'h1',
    {},
    'Hola soy Richard.'
  ),
  React.createElement(
    'p',
    {},
    'Soy ingeniero de la Web.'
  )
)

//Queda mucho mas feo.
//Con JSX simplemente escribiriamos el codigo HTML que representa eso.

const container = document.getElementById('app')

ReactDOM.render(jsx, container)



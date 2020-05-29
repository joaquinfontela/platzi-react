import React from 'react'

import NavBar from './NavBar.js'

// Props son Switch, etc. que estan definidos en App adentro de Layout.
// De esta manera renderizamos Badges o BadgeNew, segun corresponda.
// Esto lo hicimos porque ambas paginas mostraban el navbar, y antes que agregarlo en las dos, mejor escrbir una vez sola.

// El React.Fragment de adentro del return, esta para que se devuelva un solo elemento (condicion necesaria).
// Es como un <div>, pero a diferencia de este, es como invisible, no aparece en el inspec de elementos.
// Tambien lo agregamos en Badges y BadgesNew.

/* Lo que hace Layout es devolver el NavBar, y abajo sus children (es decir, el switch con sus elementos),
entonces renderiza el Navbar, mas lo que corresponda (lo que decida el Switch segun lo ingresado x el usuario). */

function Layout(props) {

    return(
        <React.Fragment>
            <NavBar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;
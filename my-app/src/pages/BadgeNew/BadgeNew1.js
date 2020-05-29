import React from 'react';

import NavBar from '../components/NavBar.js'
// Importamos la NavBar, la barra de navegacion de nuestra pagina, de su archivo correspondiente.
import header from '../images/badge-header.svg'

import './styles/BadgeNew.css'
// Nos traemos los estilos para el componente en cuestion.

import Badge from '../components/Badge.js'
// Me traigo el Badge creado en las clases anteriores, para agregarlo a la pagina que estamos creando.

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Joaquin"
                                lastName="Fontela"
                                jobTitle="Backend Engineer"
                                twitter="joaquinfontela"
                            />
                        </div>

                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Agregamos la NavBar (ver archivo).
// Agregamos el hero, con su imagen correspondiente y su fondo.
// Agregamos un contenedor con el badge creado en clases anteriores.

export default BadgeNew;
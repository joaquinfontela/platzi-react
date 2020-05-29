import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'
// Importamos el logo para incluirlo dentro de JSX.

import './styles/NavBar.css'
// Con esto importo los estilos que definio el profesor para la NavBar.

class NavBar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="brand-logo"></img>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar;
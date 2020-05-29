import React from 'react';
// Porque vamos a escribir JSX

import confLogo from '../images/logofiuba.png'
// React empaqueta la imagen recibida dentro de la variable confLogo.

import avatar from '../images/avatar.png'

import "../styles/Badge.css"
// Importamos el CSS que creo el profesor para este curso, y agregamos los nombres de las clases para que se agreguen los estilos.

class Badge extends React.Component {
    render(){
        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" height="65"/>
                </div>

                <div className="Badge__section-name">
                    <img 
                        className = "Badge__avatar"
                        src={avatar}
                        alt="Avatar"
                        height = "100"/>
                    <h1> Joaquin <br/> Fontela</h1>
                </div>

                <div className="Badge__section-info">
                    <h3> Backend Engineer </h3>
                    <div> @joaquinfontela </div>
                </div>

                <div className="Badge__footer">
                    #fiubaconf
                </div>
            </div>
        )
    }
    // Metodo obligatorio de todos los componentes, define el resultado que vamos a ver en pantalla.
}
// Porque Badge es un componente, lo declaramos de esta manera.

export default Badge;
// Para exportar el componente y usarlo en otros archivos.
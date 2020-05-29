import React from 'react';

import confLogo from '../images/logofiuba.png'

import avatar from '../images/avatar.png'

import "../styles/Badge.css"

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
                    <h1> {this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3> {this.props.jobTitle} </h3>
                    <div> @{this.props.twitter} </div>
                </div>

                <div className="Badge__footer">
                    #fiubaconf
                </div>
            </div>
        )
    }
}
// Agrego las propiedades recibidas por parametro a traves de index.js, para hacerlas variables.

export default Badge;

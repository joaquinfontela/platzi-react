import React from 'react';
import confLogo from '../images/logofiuba.png'
import Gravatar from './Gravatar'

import "./styles/Badge.css"

class Badge extends React.Component {
    render(){
        return(
            <div className="Badge" height="50">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" height="65"/>
                </div>

                <div className="Badge__section-name">
                    <Gravatar 
                        className = "Badge__avatar"
                        email={this.props.email}
                        alt="Avatar"
                        height = "50"/>
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

export default Badge;

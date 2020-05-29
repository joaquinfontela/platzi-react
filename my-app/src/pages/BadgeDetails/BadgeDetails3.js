import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom' 

import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import Badge from '../components/Badge'

function BadgeDetails(props) {

    const badge = props.badge

    return (

        <React.Fragment>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                        firstName={badge.firstName}
                        lastName={badge.lastName}
                        jobTitle={badge.jobTitle}
                        twitter={badge.twitter}
                        email={badge.email} />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                            </div>
                            
                            <div>
                                <button className="btn btn-danger">Delete</button>
                                {ReactDOM.createPortal(
                                    <h1>Hola, no estoy aca</h1>, 
                                    document.getElementById('modal')
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

/* Arriba creamos un portal, de manera de renderizar lo que createPortal recibe en el primer parametro,
en el elemento recibido en el segundo parametro. Este elem (modal), esta definido en el html,
pero por fuera de app, es decir, es un modal aparte. */

export default BadgeDetails;
import React from 'react'
import { Link } from 'react-router-dom' 

import DeleteBadgeModal from '../components/DeleteBadgeModal'
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
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal 
                                onClose={props.onCloseModal} 
                                isOpen={props.modalIsOpen}
                                onDeleteBadge={props.onDeleteBadge}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

// A su vez esta funcion tampoco se puede hacer cargo de cerrar el modal, ya que no maneja estados, de esto se hace cargo el container.
// Para abrir el modal, como esto depende del boton, se hace cargo el boton de Delete de llamar a la funcion.

export default BadgeDetails;
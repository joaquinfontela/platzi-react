import React from 'react'
import { Link } from 'react-router-dom' 

import DeleteBadgeModal from '../components/DeleteBadgeModal'
import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import Badge from '../components/Badge'

// Usamos la pagina de BadgeDetails para dar ejemplos de Hooks.

function useIncreaseCount(max) {
    const [ count, setCount ] = React.useState(0)
    // El parametro que le pasamos a useState es el valor (opcional) inicial de count.
    /* Lo que hace useState es devolver dos cosas: una variable, y una funcion que nos permite,
    al pasarle un parametro, modificar el valor de esa variable (es basicamente, y como se puede ver, un setter). */

    if (count > max){
        setCount(0)
    }

    // Nuestro increaseCount define un max, que al superarlo, devuelve el valor de count a 0.

    return [ count, setCount ]

}

// Aca arriba definimos nuestro propio Hook (useIncreaseCount), usando en su definicion uno ya definido.

function BadgeDetails(props) {

    const [ count, setCount ] = useIncreaseCount(7)
    //Es la funcion definida arriba.

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
                            <button 
                                onClick={() => {
                                    setCount(count + 1)
                                }}
                            className="btn btn-primary mb-4">Increase Count: {count}</button>
                        </div>
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

export default BadgeDetails;
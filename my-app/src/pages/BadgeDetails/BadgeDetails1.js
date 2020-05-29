import React from 'react'
import { Link } from 'react-router-dom' 

import confLogo from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'
import Badge from '../components/Badge'

class BadgeDetails extends React.Component{

    //Como vamos a hacer peticiones, toca lo de siempre:
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
                // this.props.match hace referencia a la URL, y entre los params tiene el badgeId, ya que asi se indico en App.js
            )
            this.setState({
                loading: false,
                data: data
            })
        } catch(error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    render() {

        const badge = this.state.data
        //Para no tener que esta repitiendo.
        
        if (this.state.loading){
            return <PageLoading/>
        }

        if (this.state.error){
            return <PageError error={this.state.error}/>
        }

        return(
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

/* El hero (la parte de arriba con las estrellitas) consta de un cuadro con una fila y dos columnas.
La primera columna tiene el logo, la segunda el nombre del badge seleccionado.*/

/* Despues la parte de abajo es otro container con una fila y dos columnas.
La primera muestra el badge con su info, obtenida del llamado a la api,
la segunda da las opciones de Edit y Delete. */

export default BadgeDetails;

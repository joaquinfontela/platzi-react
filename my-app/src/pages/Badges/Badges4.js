import React from 'react'

import './styles/Badges.css'

import { Link } from 'react-router-dom'

import confLogo from '../images/badge-header.svg'
import BadgesList from './BadgesList'

import api from '../api'
// Importamos la libreria que explicamos en el cuaderno.

class Badges extends React.Component {

    state = {
      loading: true,
      error: null,
      data: undefined
      //Inicializamos loading en true (la pagina empieza cargando), sin datos y sin errores.
    }

    componentDidMount() {
      // Una vez que sabemos que todo se cargo correctamente (el componenete se monto):
      this.fetchData()
    }

    fetchData = async () => {
      // Ante todo, seteamos loading en true (porque se esta cargando) y error en null, ya que por el momento no hay error.
      this.setState({
        loading: true,
        error: null
      })

      try {
        const data = await api.badges.list()
        // Ya cargamos la data, ya no esta cargando y guardamos la data en el componente.
        this.setState({
          loading: false,
          data: data
        })
      } catch (error) {
        // En este caso, hubo en error, asi que no se guarda ningun dato pero si un error.
        this.setState({
          loading: false,
          error: error
        })
      }
    }

    render(){

        if (this.state.loading) {
          return 'Loading...'
        }

        // Manejo de errores.
        if (this.state.error) {
          return `Error: ${this.state.error.message}`
        }

        return (
          <React.Fragment>
            <div className="Badges">
              <div className="Badges__hero">
                <div className="Badges__container">
                  <img
                    className="Badges_conf-logo"
                    src={confLogo}
                    alt="Conf Logo"
                  />
                </div>
              </div>
            </div>
    
            <div className="Badges__container">
              <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-primary">
                  New Badge
                </Link>
              </div>
    
              <BadgesList badges={this.state.data} />
            </div>
          </React.Fragment>
        )
    }
}

export default Badges;
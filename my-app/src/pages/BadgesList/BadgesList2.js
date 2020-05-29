import React from 'react'
import { Link } from 'react-router-dom'

import "./styles/Badge.css"
import "./styles/BadgeList.css"
import Gravatar from './Gravatar'

class BadgesListItem extends React.Component {

    render() {

      return (
        <div className="BadgesListItem">
          <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
          />
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }

  function useSearchBadges(badges) {

    const [ query, setQuery ] = React.useState("")
    // Define una variable query inicializandola vacia, y un setter para ella.
    // lo usaremos abajo en la barra de busqueda.
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges)
    //Hacemos lo mismo con filteredBadges para buscar los badges (empezamos con la lista completa).

    React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase())
        // El nombre correspondiente al badge, incluye la palabra <query>?
      })
      // Se generara y se guardara en result una lista de Badges que cumplan con la condicion recibida en filter.
      // En este caso la condicion tendra que ver con lo que haya buscado el usuario.
      setFilteredBadges(result)
      // Luego se setean los badges filtrados con el Hook definido arriba.
    }, [ badges, query ])
    /* useMemo es como un cache, ya que si una busqueda ya se hizo anteriormente, guarda los resultados
    en memoria para no estar haciendo llamadas constantes que podrian generar un cuello de botella.
    Recibe como primer parametro una funcion que filtra para obtener los resultados,
    y como segundo, una lista con aquellos elementos que, mientras no cambien, se puede mantener los resultados iguales
    (es decir devolver el cache). Ej: si cambia el query, debemos rehacer la busqueda. */

    return { query, setQuery, filteredBadges }
  }

  // Ahora BadgesList es function, para poder usar Hooks.
  function BadgesList(props) {

    const badges = props.badges

    const { query, setQuery, filteredBadges } = useSearchBadges(badges)
    /* useSearchBadges devuelve 'query' y 'setQuery' para ser usados abajo en la barra de busqueda,
    y ademas devuelve una lista con los badges filtrados segun la busqueda ingresada */

    // Sino se encuentran resultados en la llamada a la API.
    if (filteredBadges.length === 0){
      // Agregamos arriba del 'No results', la barra de busqueda nuevamente, para no perderla cuando no haya resultados.
      return (
        <div>
          <div className="form-group">
            <label>Filter Badges</label>
            <input type="text" className="form-control"
              value={query}
              onChange={(e)=>{
                setQuery(e.target.value)
              }}
            />
          </div>         
          <h3>No results.</h3>
          <Link className= 'btn btn-primary' to='/badges/new'>
            Create New Badge
          </Link>
        </div>
      )
    }

    // form-group es una clase de bootstrap. Es la barra de busqueda de badges que haremos.
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
          />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default BadgesList;
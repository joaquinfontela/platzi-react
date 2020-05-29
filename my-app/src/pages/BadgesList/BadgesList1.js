import React from 'react'

class BadgesList extends React.Component {

    render(){
        return (
            <ul className='list-unstyled'>
            {this.props.badges.map((badge) => {
                return (
                    <li className={badge.id}>
                        <p>{badge.firstName} {badge.lastName}</p>
                    </li>
                )
            })}
        </ul>
        )
    }
}

// Lista a los Badges de la pagina
/* Por cada elemento de la lista (cada uno con su id, si o si, ya que React tiene que tener una referencia a cada elem.)
mostramos su nombre y apellido.*/

export default BadgesList;
import React from 'react'

import NavBar from '../components/NavBar'
import confLogo from '../images/badge-header.svg'
import BadgesList from './BadgesList'

class Badges extends React.Component {

    state = {
        data: [{
            id: 1,
            firstName: 'Joaquin',
            lastName: 'Fontela'
        },
        {
            id: 2,
            firstName: 'Lucho',
            lastName: 'Guibert'
        }
        ]
    }

    render(){
        console.log('Hola')
        return (
            <div>
            <NavBar />

            <div className='Badges'>
                <div className='Badge__hero'>
                    <div className='Badges__container'>
                        <img className="Badges__conf-logo" alt="Conf Logo"/>
                    </div>
                </div>
            </div>

            <div className='Badge__container'>
                <div className='Badge__buttons'>
                    <a href='/badges/new' className='btn btn-primary'>
                        New Badge
                    </a>
                </div>
            </div>

            <div className='Badge__list'>
                <div className='Badge__container'>
                    <BadgesList badges={this.state.data}/>
                </div>
            </div>
        </div>
        )
    }
}

//Creamos una badge List y su propio componente.

export default Badges;
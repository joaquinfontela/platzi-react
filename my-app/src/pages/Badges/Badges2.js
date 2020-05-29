import React from 'react'

import './styles/Badges.css'

import { Link } from 'react-router-dom'
// Reemplazamos la <a> de archivos anteriores que contenia 'New Badge' por Link, que evita que se recargue toda la pag. 
// Link recibe el parametro 'to' que funciona como el 'href' de <a>.

import NavBar from '../components/NavBar'
import confLogo from '../images/badge-header.svg'
import BadgesList from './BadgesList'

class Badges extends React.Component {

    state = {
        data: [{
            id: 1,
            firstName: 'Joaquin',
            lastName: 'Fontela',
            jobTitle: 'Backend Engineer',
            twitter: 'joaquinfontela'
        },
        {
            id: 2,
            firstName: 'Luis',
            lastName: 'Guibert',
            jobTitle: 'Designer',
            twitter: 'luchito'
        },
        {
            id: 3,
            firstName: 'Maximiliano',
            lastName: 'Sancari',
            jobTitle: 'Frontend Engineer',
            twitter: 'maxisancari12'
        }
        ]
    }

    render(){
        console.log('Hola')
        return (
            <div>
                <NavBar />
            <div className='Badges'>
                <div className='Badges__hero'>
                    <div className='Badges__container'>
                        <img className="Badges__conf-logo" src={confLogo} alt="Conf Logo"/>
                    </div>
                </div>
            </div>

            <div className='Badges__container'>
                <div className='Badges__buttons'>
                    <Link to='/badges/new' className='btn btn-primary'>
                        New Badge
                    </Link>
                </div>

                <div className='Badges__list'>
                    <div className='Badges__container'>
                        <BadgesList badges={this.state.data}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Badges;
import React from 'react'

import './styles/Home.css'

import { Link } from 'react-router-dom'

import astronauts from '../images/astronauts.svg'
import logo from '../images/platziconf-logo.svg'

import confLogo from '../images/badge-header.svg'
import BadgesList from './BadgesList'

class Home extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div className="Home">
                    <div className="Home-logo__container"> 
                        <img className="Home-logo" src={logo}/>
                        <div className="Home-logo__description">
                            <div className="Home-logo__description-title">
                                PRINT YOUR BADGES
                            </div>
                            <div className="Home-logo__description-subtitle">
                                The easiest way to manage your conference
                            </div>
                        </div>
                        <div className="Home-logo__buttons">
                            <Link to='/badges/' className="Home-logo__button">
                                Start Now
                            </Link>
                        </div>
                    </div>
                    <div className="Home-image__container">
                        <img className="Home-image" src={astronauts}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Home;
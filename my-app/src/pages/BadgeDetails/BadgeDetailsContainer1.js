import React from 'react'

import BadgeDetails from './BadgeDetails'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'


class BadgeDetailsContainer extends React.Component{

    // Separaremos BadgeDetails en dos, la parte que pide la data, etc. y la parte que hace el render.
    // De esta manera dividimos responsabilidades, la interfaz va para BadgeDetails, y la logica se queda aca.

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
        
        if (this.state.loading){
            return <PageLoading/>
        }

        if (this.state.error){
            return <PageError error={this.state.error}/>
        }

        return(
            <BadgeDetails badge={this.state.data} />
        )
    }
}

export default BadgeDetailsContainer;

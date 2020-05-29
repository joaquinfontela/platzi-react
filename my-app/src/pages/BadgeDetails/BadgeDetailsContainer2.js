import React from 'react'

import BadgeDetails from './BadgeDetails'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'


class BadgeDetailsContainer extends React.Component{

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
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

    handleCloseModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    handleOpenModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    handleDeleteBadge = async () => {
        // Es una funcion asincrona, ya que lo que hace es borrar la info del badge que tiene la api.
        this.setState({
            loading: true,
            error: null
        })

        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            )

            this.setState({
                loading: false, 
            })

            this.props.history.push('/badges')
            //envia al usuario de vuelta para la pagina de badges una vez terminado el remove.
        } catch (error) {
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
            <BadgeDetails 
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                onDeleteBadge={this.handleDeleteBadge}
                modalIsOpen={this.state.modalIsOpen}
                badge={this.state.data}
            />
        )
    }
}

// A BadgeDetails le pasamos las funciones que debe llamar segun lo que vaya ocurriendo con el modal.

export default BadgeDetailsContainer;

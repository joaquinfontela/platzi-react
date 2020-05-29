import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'
import api from '../api'
import PageLoading from '../components/PageLoading'
// Importamos el loader.

class BadgeNew extends React.Component {

    state = { 
        loading: false,
        error: null,
        // Inicializamos los campos loading y error para manejar los tiempos entre el submit y el resultado.
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    } };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try{
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            this.props.history.push('/badges')
            //Si el submit tiene exito, devolvemos al usuario a Badges.

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading){
            return <PageLoading />
        }
        //En caso de un error mirar BadgeForm aca abajo.

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST-NAME'}
                                lastName={this.state.form.lastName || 'LAST-NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB-TITLE'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email || 'EMAIL'}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;
import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'
import api from '../api'

class BadgeNew extends React.Component {

    state = { form: {
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
        // Evitamos que realice por defecto acciones al hacerse un submit.

        this.setState({ loading: true, error: null })
        // Valores al inicio

        try{
            await api.badges.create(this.state.form)
            // Creamos un badge segun los datos que recibimos del formulario, y lo guardamos en la API para ser mostrado en Badges.
            this.setState({ loading: false })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
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
                            formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;
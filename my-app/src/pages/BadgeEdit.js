import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'
import api from '../api'
import PageLoading from '../components/PageLoading'
// Importamos el loader.

class BadgeEdit extends React.Component {

    state = { 
        loading: true,
        error: null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    } };

    componentDidMount() {
        this.fetchData()
        // Cuando el componente se monto, entonces pedimos la data a la api.
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
                // Match es uno de los atributos que se guarda en Route (junto con history y location).
                // Tiene sus propios params dentro de los cuales tenemos BadgeId (asi lo definimos en App.js).
            )
            // data obtendra el badge correspondiente al id del badge obtenido dentro de los parametros de read.

            this.setState({ loading: false, form: data })
            // Guardo el badge obtenido en form, para mostrarlo a la izquierda.
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            // update recibe el id de un badge y un form con los atributos a actualizar.
            // Actualiza los campos recibidos en form en la 'API'.
            this.setState({ loading: false })

            this.props.history.push('/badges')

        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading){
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image" src={header} alt="Logo" />
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
                            <h1>Edit Attendant</h1>
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

export default BadgeEdit; 
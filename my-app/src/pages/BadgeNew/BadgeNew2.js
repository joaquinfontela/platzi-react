import React from 'react';
import NavBar from '../components/NavBar.js'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm.js'

class BadgeNew extends React.Component {

    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    } };
    // Creamos el state aca, y le agregamos un atributo form (formulario).
    // Inicializo los valores del state para que no me tire un warning.

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                // Desgloso el mismo objeto form para no sobreescribir los datos que ya tenia.
                [e.target.name]: e.target.value
                // Luego le paso el nuevo valor a agregar (o sobreescribo el que ya estaba guardado).
            }
        })
    }
    // Implementamos un handle change, que guarde los datos en form de state.
    // Le pasamos la funcion a BadgeForm, para que tambien la tenga, pero siempre siendo de BadgeNew (mirar abajo).
    // Le paso a BadgeForm tambien el formulario que vamos actualizando en este componente.
    // Ahora cada campo del formulario quedara guardado en props.formValues del BadgeForm.

    render() {
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} 
                            formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Finalmente, los valores que vamos recolectando en el formulario los hacemos aparecer en Badge usando JSX (mirar arriba).

export default BadgeNew;
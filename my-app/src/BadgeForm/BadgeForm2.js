import React from 'react'

class BadgeForm extends React.Component {

    state = {
        jobTitle: 'Designer'
    };
    // Inicializamos el estado como objeto, para poder guardar cosas.
    // Ademas, le damos un valor a uno de los atributos (jobTitle) para ver como queda en la pagina.

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // Va modificando el valor de las variables que le pasemos por parametro, segun el valor que le demos.
        /* Lo que hace es, a la clave de nombre recibido (por el campo definido en el formulario),
        le da el valor recibido */
        // Mirar como se van modificando los valores en React Developer Tools -> BadgeForm.
    }

    handleClick = (event) => {
        console.log('Button click')
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form was submitted')
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange}
                               className="form-control"
                               type="text"
                               name="firstName"
                               value={this.state.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange}
                               className="form-control"
                               type="text"
                               name="lastName"
                               value={this.state.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input onChange={this.handleChange}
                               className="form-control"
                               type="email"
                               name="email" 
                               value={this.state.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange}
                               className="form-control"
                               type="text"
                               name="jobTitle"
                               value={this.state.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange}
                               className="form-control"
                               type="text"
                               name="twitter"
                               value={this.state.twitter}></input>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

/* Agregamos el atributo value a cada campo del form, para que el texto ingresado en cada campo x, 
se asigne al atributo x del state de nuestro BadgeForm. Asimismo, si ya habia un atributo predeterminado,
este aparecera escrito en la pagina.*/

export default BadgeForm;
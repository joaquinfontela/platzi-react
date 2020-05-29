import React from 'react'

class BadgeForm extends React.Component {

    handleChange = (event) => {
        console.log(event.target.value)
    }

    handleClick = (event) => {
        console.log('Button click')
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // Evita la accion por defecto que seria recargar la pagina.
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
                               name="Firstname"></input>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

// Creamos el formulario de la pagina.
// Anadimos un formulario con form, una etiqueta sera First Name, y le agregamos un input, donde escribir el nombre.
/* Ademas, le anadimos una especie de listener en el parametro onChange de input,
   que llama a la funcion que llamaremos handleChange. */
// Hacemos lo mismo para onClick en el boton, que identifica cuando hay un click.
// Ademas, le agregamos el atributo onSubmit al form, para indicar que hacer cuando se clickea el boton.

export default BadgeForm;
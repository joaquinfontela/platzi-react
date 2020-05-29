import React from 'react'

class BadgeForm extends React.Component {

    handleClick = (event) => {
        console.log('Button click')
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange}
                               className="form-control"
                               type="text"
                               name="firstName"
                               value={this.props.formValues.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange}
                               className="form-control"
                               type="text"
                               name="lastName"
                               value={this.props.formValues.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input onChange={this.props.onChange}
                               className="form-control"
                               type="email"
                               name="email" 
                               value={this.props.formValues.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange}
                               className="form-control"
                               type="text"
                               name="jobTitle"
                               value={this.props.formValues.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange}
                               className="form-control"
                               type="text"
                               name="twitter"
                               value={this.props.formValues.twitter}></input>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

// Ahora onSubmit = this.props.onSubmit ya que el manejo al enviar datos no corre por cuenta de esta clase (sino de BadgeNew).

export default BadgeForm;
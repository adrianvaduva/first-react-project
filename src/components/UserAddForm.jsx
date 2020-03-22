import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            errors: []
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    validateForm() {
        let errors = [];
        let formIsValid = true;

        if (!this.state.name) {
            formIsValid = false;
            errors["name"] = "Cannot be empty!";
        }
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty!";
        } else if (typeof this.state.email !== "undefined") {
            const atPos = this.state.email.lastIndexOf('@');
            const dotPos = this.state.email.lastIndexOf('.');
            if (atPos === -1 || dotPos === -1) {
                formIsValid = false;
                errors["email"] = "Email is not valid!";
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        const {name, email, isGoldClient} = this.state;
        this.props.submitAddForm(event, name, email, isGoldClient);
    }

    render() {
        return (
            <div className="my-3 p-3 rounded box-shadow">
                <h5 className="border-bottom border-gray pb-3 mb-0">Add users:</h5>
                <form className="user-add-form"
                      onSubmit={(event) => this.handleFormSubmit(event)}
                >
                    <div className="form-label-group pt-2">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(event) => this.updateName(event)}
                        />
                        <span style={{color: "red"}}>{this.state.errors['name']}</span>
                    </div>
                    <div className="form-label-group pt-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={(event) => this.updateEmail(event)}
                        />
                        <span style={{color: "red"}}>{this.state.errors['email']}</span>
                    </div>

                    <div className="form-label-group pt-2">
                        <label>
                            <input
                                type="checkbox"
                                name="is-gold-client"
                                checked={this.state.checked}
                                onChange={(event) => this.updateIsGoldClient(event)}
                            />
                            Gold Client
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Add new user</button>
                </form>
            </div>
        )
    }
}

export default UserAddForm;
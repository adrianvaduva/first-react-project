import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
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

    render() {
        const {name, email, isGoldClient} = this.state;

        return (
            <div className="my-3 p-3 rounded box-shadow">
                <h5 className="border-bottom border-gray pb-3 mb-0">Add users:</h5>
                <form className="user-add-form"
                      onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient)}
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
                    </div>

                    <div className="form-label-group pt-2">
                        <label >
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
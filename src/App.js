import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            background: 'white',
            color: 'black',
            users: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                data = data.filter(user => user.id < 4);
                data.forEach(user => {
                    user.isGoldClient = false;
                });
                this.setState({users: data});
            })
    }

    changeBackgroundColor(event) {
        this.setState({background: event.target.value});
    }

    changeColor(event) {
        this.setState({color: event.target.value})
    }

    getMaxId(users) {
        let maxId = 0;

        users.forEach(user => {
            if (user.id > maxId) {
                maxId = user.id;
            }
        });

        return maxId;
    }

    submitAddForm(event, name, email, isGoldClient) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                users: [
                    ...prevState.users,
                    {
                        id: this.getMaxId(prevState.users) + 1,
                        name,
                        email,
                        isGoldClient
                    }
                ]
            }
        });
    }

    render() {
        return (
            <div className="app " style={{background: this.state.background, color: this.state.color}}>
                <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Admin panel - First Project</a>
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-link">
                                <label htmlFor="backgroundColor">Change background</label>
                                <input type="color" id="backgroundColor" name="backgroundColor"
                                       onChange={(event) => this.changeBackgroundColor(event)}/>
                            </li>
                            <li className="nav-link">
                                <label htmlFor="color">Change color</label>
                                <input type="color" id="color" name="color"
                                       onChange={(event) => this.changeColor(event)}/>
                            </li>

                        </ul>
                    </div>
                </nav>
                <main role="main" className="container">
                    <UserAddForm
                        submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
                    <UserList users={this.state.users}/>
                </main>
            </div>
        );
    }
}

export default App;

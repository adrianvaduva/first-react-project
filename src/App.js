import React from 'react';
import UserList from './components/UserList';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            background: 'white',
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

    changeColor(event) {
        this.setState({background: event.target.value});
    }

    render() {
        return (
            <div className="app" style={{background: this.state.background}}>
                <h1>Admin panel - First Project</h1>
                <UserList users={this.state.users}/>
                <input type="color" onChange={(event) => this.changeColor(event)}/>
            </div>
        );
    }
}

export default App;

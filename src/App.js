import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            background: 'white',
            color: 'black',
            users: [],
            posts: [],
            showUsers: true
        };
    }

    componentDidMount() {
        this.getUsers();
        this.getPosts();
    }

    getUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                data = data.filter(user => user.id < 4);
                data.forEach(user => {
                    user.isGoldClient = false;
                    user.salary = user.id * 1000
                });
                this.setState({users: data});
            });
    }

    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                data = data.filter(post => post.id < 4);
                this.setState({posts: data});
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

    showUsers(event, show) {
        this.setState({showUsers: show})
    }

    render() {
        return (
            <div className="app " style={{background: this.state.background, color: this.state.color}}>
                <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Admin panel - First Project</a>
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-link">
                                <input type="button" onClick={(event) => this.showUsers(event, true)}
                                       value="List of users"/>
                            </li>
                            <li className="nav-link">
                                <input type="button" onClick={(event) => this.showUsers(event, false)}
                                       value="List of posts"/>
                            </li>
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

                    {
                        this.state.showUsers === true
                            ? <div>
                                <UserAddForm
                                    submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
                                <UserList users={this.state.users}/>
                            </div>
                            : <PostList posts={this.state.posts}/>
                    }
                </main>
            </div>
        );
    }
}

export default App;

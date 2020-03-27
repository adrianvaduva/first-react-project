import React from 'react';
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About}/>
                <Route path="*" component={Page404}/>
            </Switch>
        );
    }
}

export default App;

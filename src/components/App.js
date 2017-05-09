import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Posts from '../routes/Posts';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Route exact path="/" component={Home}/>
                    <Route path="/posts" component={Posts}/>
                </div>
            </Router>
        );
    }
}
export default App;
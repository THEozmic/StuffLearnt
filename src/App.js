import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Day from './components/Day';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {username: null, password: null, isLoggedIn: false}
    }

    render () {
        return (
            <div className='app'>
                <Navbar isLoggedIn={this.state.isLoggedIn} changeCredentials={this._changeCredentials.bind(this, {})}/>
                <Day isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }

    _changeCredentials({username, password}) {
        // do Firebase check
        let isValid = true;
        if (isValid) {
            this.setState({isLoggedIn: true, username, password});
        } else {
            this.setState({isLoggedIn: false});
        }
    }
}

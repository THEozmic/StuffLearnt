import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Day from './components/Day';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {username: null, password: null, isLoggedIn: true}
    }

    render () {
        return (
            <div className='app'>
                <Navbar isLoggedIn={this.state.isLoggedIn} changeCredentials={this._changeCredentials.bind(this)}/>
                <Day isLoggedIn={this.state.isLoggedIn} changeCredentials={this._changeCredentials.bind(this)}/>
            </div>
        )
    }

    _changeCredentials({username, password, isValid}) {
        // do Firebase check
        //let isValid = true;
        this.setState({isLoggedIn: isValid, username, password});
        
    }
}

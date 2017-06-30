import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Day from './components/Day';

export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            userName: null,
            password: null
        }
    }

    render () {
        return (
            <div className='app'>
                <Navbar/>
                <Day/>
            </div>
        )
    }
}

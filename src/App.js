import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';

export default class App extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className='app'>
                <Navbar/>
            </div>
        )
    }
}

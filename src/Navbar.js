import React, {Component} from 'react';

export default class Navbar extends Component {
    constructor () {
        super();
    }

    render () {
        return (

            <div className='navbar'>
                <div className='nav-logo'>StuffLearnt</div>
                <div className='nav-btn'>login</div>
                <div className='nav-btn'>add new</div>
                <div className='nav-menu'><span>more</span>
                    <ul className='menu-items'>
                        <li><a href='#' onClick={this._logout}>Logout</a></li>
                        <li><a href='#' onClick={this._editProfile}>Edit Profile</a></li>
                        <li><a href='#' onClick={this._about}>About</a></li>
                    </ul>
                </div>
            </div>


        )
    }

    _logout () {
        this.setState({logout: true});
    }

    _editProfile () {
        this.setState({profile_modal_visible: true});
    }

    _about () {
        this.setState({about_modal_visible: true});
    }
}
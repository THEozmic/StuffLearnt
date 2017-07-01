import React, {Component} from 'react';
import '../css/Navbar.css';

export default class Navbar extends Component {
    constructor () {
        super();
        this.state = {
            logout: false,
            profile_modal_visible: false,
            about_modal_visible: false,
            nav_menu_visible: false,
            menu_btn_text: "more"
        }
    }

    render () {
        let menuItems = "";
        if (this.state.nav_menu_visible) {
            menuItems = (<div className='menu-items'>
                            <div className='nav-btn' onClick={this._toggleModal.bind(this, 'edit profile')}>edit profile</div>
                            <div className='nav-btn' onClick={this._toggleModal.bind(this, 'about')}>about</div>
                        </div>);
        }

        let navContent = "";
        if (this.props.isLoggedIn == true) {
            navContent = <div>
                    <div className='nav-btn' onClick={this._toggleModal.bind(this, 'logout')}>logout</div>
                    <div className='nav-btn' onClick={this._toggleModal.bind(this, 'add new')}>add new</div>
                    <div className='nav-btn' onClick={this._nav_menu_toggle.bind(this)}>{this.state.menu_btn_text}</div>
                    </div>
        }

        
        return (

            <div className='navbar'>
                <div className='nav-logo'>StuffLearnt</div>
                <div className='nav-items'> 
                    {navContent}
                    {this.props.isLoggedIn == true ? menuItems : <div></div>}
                </div>
                
                
            </div>


        )
    }

    _toggleModal (which_modal) {
        
        switch (which_modal) {
            case "logout":
                this.setState({logout: !this.state.logout});
                this.props.changeCredentials({"username": "Michael", "password": "Password", "isValid": false});
                break;
            case "add new":
                this.setState({newStuff_modal_visible: !this.state.newStuff_modal_visible});
                break;
            case "edit profile":
                this.setState({edit_profile_modal_visible: !this.state.edit_profile_modal_visible});
                break;
            case "about":
                this.setState({about_modal_visible: !this.state.about_modal_visible});
                break;
            case "login":
                this.setState({login_modal_visible: !this.state.login_modal_visible});
                break;
            default:
                console.log("Modal not found/Action not found");
        }
        console.log(which_modal);
    }

    _nav_menu_toggle () {
        let toBeVisible = this.state.nav_menu_visible === false ? true : false;
        if (toBeVisible) {
            this.setState({menu_btn_text: "less"});
        } else {
            this.setState({menu_btn_text: "more"});
        }
        this.setState({nav_menu_visible: toBeVisible});
    }
}
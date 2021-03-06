import React, {Component} from 'react';
import jQuery from 'jquery';
import '../css/Day.css';

export default class Day extends Component {
    constructor () {
        super();
        this.state = {stuff_learnt : []}
    }

     componentWillMount () {
        this._fetchStuffLearnt();
    }

    render () {
        // this is for when user is not validated
        if (!this.props.isLoggedIn) {
            return (
            <div className="days">
                <div className="login-register-modal">
                    <div className="form-heading">Sign in or Create a new account</div>
                    <div className="form-label">Username:</div>
                    <input type="text"/>
                    <div className="form-label">Password:</div>
                    <input type="password"/>
                    <button className="submit-form" onClick={this._login.bind(this)}>Submit</button>
                </div>
            </div>
            )
        }

        let stuff_learnt = this.state.stuff_learnt.map((day) => {
            console.log(day);
            let day_content = day.stuff.map((day_stuff) => {
                return (<div className="day" key={day_stuff.id}>{day_stuff.content_title}</div>)
            });

            return (
                <div className="day-group">
                    <div className="day-group-date">{day.details.date}</div>
                    {day_content}
                </div>
            )
    
        });

        return (
            
            <div className="days">
                {stuff_learnt}
            </div>
        )
    }

    _getStuffLearnt () {
        return this.state.stuff_learnt.map((stuff) => {
            return (<div className='day' key={stuff.stuff.content_title}>
                Hello {stuff.stuff.content_title}
            </div>)
        });
    }

    _fetchStuffLearnt () {
        jQuery.ajax({
            method: 'GET',
            url: '/api/stuff_learnt.json',
            success: (stuff_learnt) => {
                this.setState({ stuff_learnt });
            }
        });
    }

    _login () {
        
        this.props.changeCredentials({"username": "Michael", "password": "Password", "isValid": true});
    }

}
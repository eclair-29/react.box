import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { app_iD } from '../configs/app_ID'

class FBLogin extends Component {
    state = { 
        is_loggedin: false,
        user_ID: null,
        user_name: null,
        user_birthday: null,
        user_picture: null,
        user_email: null,
        user_location: null,
        user_age: null
    }

    responseFacebook = res => {
        console.log(res)
        this.setState({
            is_loggedin: true,
            user_ID: res.userID,
            user_name: res.name,
            user_birthday: res.birthday,
            user_email: res.email,
            user_location: res.location.name,
            user_age: res.age_range.min ,
            user_picture: res.picture.data.url
        })
    }

    logoutFacebook = () => {
        this.setState({ is_loggedin: false })
    }

    render() {
        return (
            <div className="wrapper">
                { this.state.is_loggedin ? (
                    <div className="fb-user">
                        <img 
                            src={ this.state.user_picture } 
                            alt={ `identity of ${this.state.user_name}` } 
                        />
                        <h6>Welcome { this.state.user_name }</h6>
                        <button 
                            className="ui basic blue button"
                            onClick={ this.logoutFacebook }
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="fb-login">
                        <h4>To get started you must log in to your account</h4>
                        <FacebookLogin
                            appId={ app_iD.id }
                            autoLoad={true}
                            fields="name,email,picture,birthday,location,friends,age_range"
                            cssClass="ui basic blue button"
                            callback={this.responseFacebook}
                        />
                    </div>
                ) }
            </div>
        )
    }
}

export default FBLogin
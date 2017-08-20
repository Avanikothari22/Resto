import React, {Component} from 'react';
import LoginScreen from './LoginScreen';
import {connect} from 'react-redux';
import styles from './style.js';
import {userLogin, facebookLogin, googleLogin} from '../../actions/login';

export default class Login  extends Component{

    static navigationOptions = {
        header:false,
    };
    
    constructor(props){
        super(props);
        this.loginUser = this.loginUser.bind(this);
        this.fbLogin = this.fbLogin.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount(){
         
    }

    

    loginUser(userName, password){

    }

    forgotPassword(){

    }

    fbLogin(){

    }

    googleLogin(){

    }

    render(){
        return(
            <LoginScreen
                onLoginClick={this.loginUser}
                onFbLogin={this.fbLogin}
                onGoogleLogin={this.googleLogin}
                onForgotPassword={this.forgotPassword}
            />
        );
    }
}


mapDispatchToProps = dispatch => {
    return({
        loginUser: (user, password) => {
            dispatch(userLogin(user,password));
        },
        fbLogin: () => {
            dispatch(facebookLogin());
        },
        googleLogin: () => {
            dispatch(googleLogin());
        }
    })
} 


//export default connect(null, mapDispatchToProps)(Login);
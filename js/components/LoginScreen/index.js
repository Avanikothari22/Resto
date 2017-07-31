import React, {Component} from 'react';
import LoginScreen from './LoginScreen';

import styles from './style.js';

export default class Login  extends Component{

     static navigationOptions = {
        header:false,
    };
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    

    loginUser(userName, password){

    }

    forgotPassword(){

    }

    render(){
        return(
            <LoginScreen />
        );
    }
} 
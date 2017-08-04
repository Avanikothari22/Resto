import React, {Component} from 'react';
import {TextInput, Image, Button, View, ScrollView, Text, TouchableOpacity} from 'react-native';

import styles from './style';

export default class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:'',
        }
    }

   

    componentDidMount(){

    }

    render(){
        return(
       
            <View style={styles.container}>
        
                <View style={styles.logoView}>
                    <Image style={styles.logo} source={require('../SplashScreen/assets/my_logo.png')}/>
                    <View>
                        <Text style={{color: '#ffffff', fontSize: 16, marginTop: -20}}>Search. Eat. Share.</Text>
                    </View>
                </View>
                
                <View style={styles.welcomeTextView}>
                    <Text style={styles.welcomeText}>Welcome Back. Login to your Account ! </Text>    
                </View>
                
                <View style={styles.loginContainer}>

                        <View style={styles.inputBox}>
                            <Image
                                style={styles.loginIcon}
                                source={require('./assets/email/email.android.png')}/>
                            <TextInput
                                underlineColorAndroid ='#ffffff'
                                placeholder='Enter your username.'
                                onChangeText={(text)=>this.setState({userName: text})}
                                value={this.state.userName}
                                style={styles.inputTextField}
                            />
                        </View>
                        
                        <View style={styles.inputBox}>
                            <Image
                                style={styles.loginIcon}
                                source={require('./assets/key/key.android.png')}/>
                            <TextInput
                                underlineColorAndroid ='#ffffff'
                                placeholder='Enter your password.'
                                secureTextEntry={true}
                                onChangeText={(text)=>this.setState({password: text})}
                                value={this.state.password}
                                style={styles.inputTextField}
                            />
                        </View> 
                        
                        <TouchableOpacity style={{backgroundColor: '#336666', padding: 16, marginTop:10, borderRadius: 30}}>
                            <Text style={{color:'#ffffff', fontSize: 18, textAlign: 'center'}}>Login In</Text>
                        </TouchableOpacity>
            
                </View>
                
                <View style={{flex:2,}}>

                </View>
    
            </View>
      
        );
        
    }
}
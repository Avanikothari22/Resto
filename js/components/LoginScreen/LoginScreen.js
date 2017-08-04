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
        <ScrollView>
            <View style={styles.container}>
        
                <View style={styles.logoView}>
                    <Image style={styles.logo} source={require('../SplashScreen/assets/my_logo.png')}/>
                    <View>
                        <Text style={{color: '#ffffff', fontSize: 14, marginTop: -20}}>Search. Eat. Share.</Text>
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
                                placeholderTextColor='#33496A'
                                placeholder='Enter your email.'
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
                                placeholderTextColor= '#33496A'
                                secureTextEntry={true}
                                onChangeText={(text)=>this.setState({password: text})}
                                value={this.state.password}
                                style={styles.inputTextField}
                            />
                        </View> 
                        
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={{color:'#ffffff', fontSize: 18, textAlign: 'center'}}>Login In</Text>
                        </TouchableOpacity>
            
                </View>
                
                <View style={styles.baseContainer}>
                    <View style={styles.socialContainer}>
                        <TouchableOpacity style={[styles.social,{marginRight:10, backgroundColor:'#db3236'}]}>
                            <Text style={styles.socialText}>G+ Login In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.social,{backgroundColor: '#3b5998', marginLeft:0}]}>
                            <Text style={styles.socialText}>fb Login In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signatureView}>
                        <Text style={{color: '#ffffff'}}>Made with  ❤  by Suraj Malviya. </Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        );
        
    }
}
import React, {Component} from 'react';
import {TextInput, Image, Button, View} from 'react-native';

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
            </View>
            <View style={[styles.container,{padding:16, justifyContent:'space-around'}]}>
                <View style={{flex:2, justifyContent: 'space-around'}}>
                    <View style={styles.inputBox}>
                        <Image style={{flex:1, resizeMode: 'contain', alignSelf: 'center',}} source={require('./assets/email/email.android.png')}/>
                        <TextInput
                            onChangeText={(text)=>this.setState({userName: text})}
                            value={this.state.userName}
                            style={{borderBottomColor: '#0f163a', flex: 8, alignSelf: 'flex-end', marginLeft:10}}
                        />
                        </View>
                    <View style={styles.inputBox}>
                       <Image style={{flex:1, resizeMode: 'contain', alignSelf: 'center',}} source={require('./assets/key/key.android.png')}/>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(text)=>this.setState({password: text})}
                            value={this.state.password}
                            style={{borderBottomColor: '#0f163a', flex: 8, alignSelf: 'flex-end', marginLeft:10}}
                        />
                        </View>
                </View>
                <View style={{flex:1, marginTop: 20}}>
                    <Button
                        title='Login'
                        onPress={()=>console.log("loginScreen button pressed !")}/>
                </View>
            </View>
        </View>
        );
        
    }
}
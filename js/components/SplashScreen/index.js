import React, {Component} from 'react';
import {View, ActivityIndicator, Image, Button, Text} from 'react-native';
import styles from './style';
import HomeScreen from '../HomeScreen';
export default class SplashScreen extends Component{
  
  static navigationOptions = {
    header:false,    };

  constructor(props){
    super(props);
    console.log("in constructor","");
    this.state={
      isFetching: true,
    }
  }

  componentDidMount(){
    const { navigate } = this.props.navigation;
    setTimeout(()=>{navigate('HomeScreen')}, 5000);

    //call api to fetch user data
    //2. isUserlogin ? fastforward to home : LoginScreen (async Storage.)
  }

  componentWillReceiveProps(nextProps){
    //verify fetching and go to next screen accordingly.
  }

  render(){

    // Loader to be stopped when user data is loaded....
    // if user is not already logged in, then the screen should stay for 4-5 seconds and,
    // then navigate to lOGIN/Signp Screen.

     const { navigate } = this.props.navigation;
    return(
    <View style={styles.containerView}>
    <Image source = {require('./assets/my_logo.png')} style={styles.logo}/>
    <Text style={styles.tag}>Search. Eat. Share</Text>
      <ActivityIndicator
        style={{marginTop:30}}
        animating={this.state.isFetching}
        size="large"
        color="#fff"
        hidesWhenStopped={false}/>

    </View>
    );

  }
}

import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './style';

export default class SplashScreen extends Component{

  constructor(props){
    super(props);
    console.log("in constructor","");
    this.state={
      isFetching: true,
    }
  }

  componentDidMount(){
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

    return(
    <View style={styles.containerView}>
      <ActivityIndicator
        animating={this.state.isFetching}
        size="large"
        color="#fff"
        hidesWhenStopped={false}/>
    </View>
    );

  }
}

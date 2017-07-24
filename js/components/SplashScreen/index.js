import React, {Component} from 'react';
import {View} from 'react-native';

class SplashScreen extends Component{

  constructor(props){
    super(props);
    this.state={
      isFetching: false,
    }
  }

  componentDidMount(){
    //call api to fetch user data....
  }

  componentWillReceiveProps(nextProps){
    //verify fetching and go to primary screen.
  }

  render(){
    <View style={styles.containerView}>
    </View>
  }
}

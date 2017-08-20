import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import Login from './components/LoginScreen';
import { StackNavigator } from 'react-navigation';

export default  RestoApp = StackNavigator({
SplashScreen: { screen: SplashScreen },
HomeScreen :{ screen: HomeScreen},
LoginScreen:  {screen: Login},
});

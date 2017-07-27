import React from 'react'
import {
  AppRegistry,
  Text,
} from 'react-native'
import SplashScreen from './components/SplashScreen'
import HomeScreen from './components/HomeScreen'
import LoginScreen from './components/LoginScreen'
import { StackNavigator } from 'react-navigation'

export default  RestoApp = StackNavigator({
SplashScreen: { screen: SplashScreen },
HomeScreen :{ screen: HomeScreen},
});

import React from 'react'
import {
  AppRegistry,
  Text,
} from 'react-native'
import SplashScreen from './components/SplashScreen'
import { StackNavigator } from 'react-navigation'
export default  RestoApp = StackNavigator({
SplashScreen: { screen: SplashScreen },
});

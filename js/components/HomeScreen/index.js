import React, {Component} from 'react';
import { View,
  Image,
  Text,
  StatusBar,
  TouchableHighlight,
  ScrollView,
  TextInput,
  Alert,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Button } from 'react-native'
  import styles from './styles'

  export default class HomeScreen extends Component{
    static navigationOptions = { header: false, };
    constructor(props){
      super(props);
    }
   render(){
      return(
      <View style={styles.container}>
            <View style={{flex: 3,flexDirection:'column'}}>
              <Image source ={require('./assets/food_logo.jpeg')} style={styles.headerImage}/>
              <View style={{alignItems:'center',justifyContent:'center', marginTop: -100}}>
                <Image source= {require('./assets/my_logo2.png')} style={{resizeMode:'contain', zIndex: 4}}/>
              </View>
            </View>
              <View style={{ flex:2, flexDirection:'column', marginBottom: 20}}>
                <View style={{flexDirection:'row',flex:4}}>
                  <Image source={require('./assets/search_icon.png')} style={{flex:1,resizeMode:'contain',width:20,height:20}} />
                  <Text style={{fontSize:15,flex:3,color:'#000000'}}>view menus,photos and reviews for restaurants around you</Text>
                </View>
                <View style={{marginTop:10,flexDirection:'row',flex:4}}>
                  <Image source={require('./assets/explore_icon.png')} style={{flex:1,resizeMode:'contain',width:20,height:20}} />
                  <Text style={{fontSize:15,flex:3,color:'#000000'}}>Explore detailed theme-based lists of top places in your city</Text>
                </View>
                <View style={{marginTop:10,flexDirection:'row',flex:4}}>
                  <Image source={require('./assets/bookmark_icon.png')} style={{flex:1,resizeMode:'contain',width:20,height:20}} />
                  <Text style={{fontSize:15,flex:3,color:'#000000'}}>view places you want to visit in the future to your Bookmarks</Text>
                </View>
            </View>
              <View style={{flex:2,}}>
                <View style={{styles.buttons}}>
                   <Button  title="Login"  color="#0f163a" style={styles.loginButton}/>
                    <Button  title="Signup"  color="#0f163a" style={styles.loginButton}/>
                </View>
                <Button title = "continue with Facebook"  color="#4267B2"/>
                <Button title = "continue with Google" color="#AAB7B8"/>
              </View>
          </View>)
    }
  }
//#551A3D

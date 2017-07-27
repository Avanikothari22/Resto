import React, {Component} from 'react';
import { View, Image, Text, StatusBar,
  TouchableHighlight, ScrollView,
  TextInput, Alert, Dimensions, TouchableOpacity,
  ActivityIndicator, Button } from 'react-native'
  import styles from './styles'
  const height=  Dimensions.get('window').height
  export default class HomeScreen extends Component{
    static navigationOptions = { header: false, };
    constructor(props){
      super(props);

    }
    render(){
      return(
      <View style={{ height:{height}, justifyContent:'center', alignItems:'center',flex:1}}>
        <StatusBar backgroundColor={'#05064c'} />
        <ScrollView >
            <View style={{flex: 1,flexDirection:'column'}}>
              <Image source ={require('./assets/food_logo.jpeg')} style={{ flex:1, resizeMode:'cover',width:500}}/>
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source= {require('./assets/my_logo2.png')} style={{marginTop:-100,resizeMode:'contain'}}/>
              </View>
            </View>
              <View style={{ flex:3, flexDirection:'column'}}>
                <View style={{flex:1.5}}>
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
                <View style={{flex:1.5, flexDirection:'row',padding:10}}>
                  <View style={{flex:1, padding:10}}>
                    <Button  title="signup"  color="#0f163a"/>
                  </View>
                  <View style={{flex:1, padding:10}}>
                  <Button  title="login" color="#0f163a" />
                </View>
              </View>
            </View>
              <View style={{padding:10}}>
                <Button title = "continue with Facebook"  color="#4267B2"/>
              </View>
              <View style={{padding:10}}>
                <Button title = "continue with Google" color="#AAB7B8"/>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      )
    }
  }
//#551A3D

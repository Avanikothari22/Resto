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
        
        <Image source ={require("./assets/banner.jpg")} style={styles.headerImage}/>
        
        <View style={styles.description}>
                <View style={styles.descriptionView}>
                  <Image source={require('./assets/search.png')}
                    style={styles.descriptionImage} />
                  <Text style={styles.descriptionText}>
                    Search Restaurants around you, View menus, photos, ratings & many more.</Text>
                </View>
                 <View style={styles.descriptionView}>
                  <Image source={require('./assets/burger.png')}
                   style={styles.descriptionImage} />
                  <Text style={styles.descriptionText}>
                    Eat what you love from diversified categories and cuisines.</Text>
                </View>
                <View style={styles.descriptionView}>
                  <Image source={require('./assets/teamwork.png')}
                  style={styles.descriptionImage} />
                 <Text style={styles.descriptionText}>
                  Share your visit experiences among your friends, family and colleagues</Text>
                </View> 
        </View>
    
        <View style={styles.buttons}>
          <View style={{flexDirection:'row', flex:1.5, justifyContent:'space-between'}}>
            <View style={styles.loginButton}>
              <Button title='Login' color='#0f163a' onPress={()=>console.log('pressed')}/>
            </View>
           <View style={{flex:1}}>
             <Button title='SignUp' color='#0f163a' onPress={()=>console.log('pressed')}/>
            </View>
          </View>
          <View style={styles.socialLogin}>
            <Button title='Login with Facebook' onPress={()=>console.log('loging using fb')} color='#3b5998'/>
            <Button title='Login with Google' onPress={()=>console.log('loging using fb')} color='#db3236'/>
          </View>
        </View>
      </View>
)
    }
  }

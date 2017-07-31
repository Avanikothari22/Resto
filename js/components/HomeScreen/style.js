import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff',
    paddingBottom: 16,
  },
  headerImage: {
    flex:5,
    resizeMode:'cover',
    width: width,
  },
  buttons:{
    flex:3,
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 10,
  },
  description:{
    flex:4,
    padding:16,
  },
  descriptionImage:{
    flex:1,
    resizeMode:'contain',
    height: 40,
    width:40,
    padding: 5,
  },
  descriptionView:{
    flexDirection:'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descriptionText:{
    fontSize:14,
    flex:3,
    color:'#333333',
    fontFamily: 'Roboto',
  },
  loginButton:{
    flex:1, 
    paddingRight:10,
  },
  socialLogin:{
    flex:3,
    justifyContent:'space-around',
  }
  
});

import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex:1,
    width: width,
    backgroundColor: 'white',
    height: height,
  },
  headerImage: {
    flex:1,
    resizeMode:'cover',
    width: width,
    height: height/2,
  },
  loginButton:{
    flex:1,
  },
  buttons:{
    flex:2,
    flexDirection:'row',
  },
});

import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

module.exports = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor:'#0f163a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height: height/4,
    width: width/2,
    resizeMode: 'contain'
  },
  tag:{
    color: '#ffffff',
    fontSize:14,
    marginTop:-20,
  }
});

import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

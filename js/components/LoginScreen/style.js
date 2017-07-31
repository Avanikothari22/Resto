import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logoView:{
        flex:2,
        backgroundColor: '#0f163a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        height: height/4,
        width: width/2,
        resizeMode: 'contain',
    },
    inputBox:{
        flexDirection: 'row',
        borderColor: '#D3D3D3',
        borderRadius: 20,
       // borderWidth: 1,
        paddingRight: 10,
        
    }
});
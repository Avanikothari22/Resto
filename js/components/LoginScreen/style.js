import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default styles = StyleSheet.create({
    
    container:{
        flex:1,
      backgroundColor: '#0f163a',
      borderColor: '#ffffff',
      borderWidth:1,
    },
    logoView:{
        flex:3,
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
        borderRadius: 30,
        borderWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor:'#ffffff',
        marginBottom: 10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputTextField: {
        borderBottomColor: '#0f163a',
        flex: 8,
        alignSelf: 'center',
        marginLeft:10,
        marginRight: 10,
        fontSize: 16,
    },
    loginContainer:{
        flex:3,
        padding:16,
        marginTop:10,
        justifyContent:'center',
        alignContent:'center',
    },
    loginIcon:{
        flex:1,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    welcomeTextView:{
        flex:1,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'flex-end',
        alignItems:'center',
    },
    welcomeText:{
        color: '#ffffff',
        fontSize: 20,
    }
    
});
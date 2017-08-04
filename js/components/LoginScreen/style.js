import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default styles = StyleSheet.create({
    
    container:{
        height : height-24,
        backgroundColor: '#0f163a',
        padding: 16,
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
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 10,
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
        color: '#ffffff'
    },
    loginContainer:{
        flex:3,
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
        justifyContent: 'flex-end',
        alignItems:'center',
        marginBottom: 10,
    },
    welcomeText:{
        color: '#ffffff',
        fontSize: 20,
    },
    loginButton:{
        backgroundColor: '#596E8D',  //'#446CA9', //'#336666',
        padding: 8,
        marginLeft:16,
        marginRight: 16,
        marginTop: 8,
    },
    baseContainer:{
        flex:2,
        justifyContent:'space-between',
        marginTop:26
    },
    socialContainer:{
        flex:1,
        justifyContent:'space-around',
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    social:{
        flex:1,
        padding: 8,
        backgroundColor: '#596E8D',
        marginLeft:16,
        marginRight:16,
    },
    socialText:{
        color:'#ffffff',
        fontSize: 18,
        textAlign: 'center'
    },
    signatureView:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

});
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    DrawerLayoutAndroid,
} from 'react-native';


export default class DiscoverScreen extends Component{
    constructor(props){
        super(props);
    }

};

DiscoverScreen.defaultProps = {

};

DiscoverScreen.propTypes = {
    user: PropTypes.object.isRequired,
    restaurants: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

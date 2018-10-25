import React, {Component} from 'react'
import {
    View,
    Text,
    ImageBackground,
    ActivityIndicator,
} from 'react-native';
import splash from './images/splash.png';
// import logo from './images/CompuMe.png';

class SplashScreen extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
            <ImageBackground source={splash}  style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover',
                justifyContent: 'center',
                alignItems:'center',
              }}>
                <ActivityIndicator color="#2D4A6E" size={20} style={{marginTop: 100}} />
            </ImageBackground>
         )
    }
}

export default SplashScreen
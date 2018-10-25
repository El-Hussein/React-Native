import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ContentComponent from './ContentComponent';
import LoginScreen from "./LoginScreen";

class Menu extends Component{

    constructor(props) {
         super()
    }
    render () {
         return (
             <MenuContent />
         )
    }
}

const MenuContent = createStackNavigator({
    Content: {
        screen: ContentComponent,
        navigationOptions: {
            title:'Content'
        }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title:'Login'
        }
    }
},
{
    navigationOptions:{
        header: null,
    }
})
export default Menu 
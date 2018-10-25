import React, { Component } from 'react';
import TabNavigator from './TabNavigator';
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Icon, } from 'react-native-elements';
import Dimensions from 'Dimensions';

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: 'search',
            keyword: false,
        }
        // alert("Home props: " + JSON.stringify(props));
    }
    componentWillReceiveProps() {
        // update original states
        alert('here');
    }

    render() {
        return (
            
            <View style={{flex:5}}>
                <View style={styles.header}>
                    <View style={styles.subHeader}>
                        <Icon name="menu" size={35} color='white' type='feather' onPress={()=>this.props.navigation.toggleDrawer()}/>
                        <Text style={{marginLeft: 10, fontSize: 30, color:'white'}} > Computer Shop </Text>
                        <View style={{alignItems: "flex-end", marginLeft: "auto"}}>
                            <Icon name="home" color='white' size={35} onPress={()=>this.props.navigation.navigate('Cart')} />
                        </View>
                        <View style={{alignItems: "flex-end", marginLeft: "auto"}}>
                            <Icon name="shopping-cart" color='white' size={35} onPress={()=>this.props.navigation.navigate('Cart')} />
                        </View>
                    </View>
                    <View style={{padding:10 , flexDirection: "row", flex:1, justifyContent:'space-between', alignItems:'center'}} >
                        <TextInput style={{height:50, width:DEVICE_WIDTH - 60 , color:'white'}}
                        placeholder='Search'
                        placeholderTextColor='white'
                        onFocus={()=>this.props.navigation.navigate('Search')}/>
                        <Icon name='search' color='white' size={20} />
                    </View>
                </View>
                <View style={{flex:6}} >
                    <TabNavigator />
                </View>
            </View> 
        )
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header:{
        flex:1,
        padding:10,
        // backgroundColor: '#62AEFF'
        backgroundColor: '#CC542F'
    },
    subHeader:{
        flex:1,
        flexDirection: "row", 
        padding: 5,
        alignItems: "center",        
    },
    input:{
        flex:1,
        height:40,
        fontSize:20,
    }
})
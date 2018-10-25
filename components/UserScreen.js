import React, {Component} from 'react'
import {
    View, Text, TextInput, StyleSheet
} from 'react-native';
import { 
    Icon, 
} from 'react-native-elements';
import Profile from './Profile';
import EditProfile from './EditProfile';
import EditAddress from './EditAddress';
import ReturnRequest from './ReturnRequest';
import Dimensions from 'Dimensions';
import OrderHistory from './OrderHistory';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

class Home extends Component{
    static navigationOption = {
        header: true,
    };
    constructor(props) {
         super()
    }
    render() {
        return (
            <View style={{flex:5}}>
                <View style={styles.header}>
                    <View style={styles.subHeader}>
                        <Icon name="menu" size={35} color='white' type='feather' onPress={()=>this.props.navigation.toggleDrawer()}/>
                        <Text style={{marginLeft: 10, fontSize: 30, color:'white'}} > Computer Shop </Text>
                        <View style={{alignItems: "flex-end", marginLeft: "auto"}}>
                            <Icon name="home" color='white' size={35} onPress={()=>{
                                    this.props.navigation.state.params.BACK2();
                                    this.props.navigation.navigate('Home');
                                } 
                            }/>
                        </View>
                    </View>
                    <View style={{padding:10 , flexDirection: "row", flex:1, justifyContent:'space-between', alignItems:'center'}} >
                        <TextInput style={{height:50, width:DEVICE_WIDTH - 60 , color:'white'}}
                        placeholder='Search'
                        placeholderTextColor='white'
                        />
                        <Icon name='search' color='white' size={20} />
                    </View>
                </View>
                <View style={{flex:6}} >
                    <UserProfile />
                </View>
            </View> 
        );
    }
}


const UserProfile = createMaterialTopTabNavigator(
    {
        Profile: { screen: Profile },
        EditAddress: { screen: EditAddress },
        EditProfile: { screen: EditProfile },
        OrderHistory: { screen: OrderHistory },
        ReturnRequest: { screen: ReturnRequest },
    },{
        tabBarPosition : "bottom",
        tabBarOptions : {
            style: {
            backgroundColor: "#CC542F",
            paddingRight: 10,
            paddingLeft: 10,
            },
        },
    }
  )

export default Home

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
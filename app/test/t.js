/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


class Home extends Component{
  render () {
       return (
           <View>
               <Text> Home </Text>
           </View>
       )
  }
}

class Profile extends Component{
  render () {
       return (
           <View>
               <Text> Profile </Text>
           </View>
       )
  }
}

class Orders extends Component{
  render () {
       return (
           <View>
               <Text> Orders </Text>
           </View>
       )
  }
}

class Settings extends Component{
    
  render () {
       return (
           <View>
               <View style={{height: 50, backgroundColor:"#BCDBDF", flexDirection:'row', padding:10, justifyContent:'space-between'}}> 
                    <Icon name="arrow-left" size={20} color="#235784" />
                    <Text style={{width:290, fontWeight:'bold', fontSize:16, textAlign:'right', color:'#235784'}}>الرئيسية</Text>
                    <Icon name="bars" size={20} color="#235784" />
               </View>
               
           </View>
       )
  }
}

const CustomHeader = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 20 : 0
      }}
    >
      <Text> {this.props.navigation.Header.routeName} </Text>
        <Header {...props} />
    </View>
  );
};

export default AppRun = createBottomTabNavigator(
  {
    Settings: { 
        screen: Settings,
        navigationOptions: () => ({
            tabBarLabel: ({tintColor}) => (<Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:tintColor}}> الإعدادات </Text>),
            tabBarIcon: ({tintColor}) => (<Icon name="cogs" color={tintColor} size={14}/>),
        })
    },
    Orders: { 
        screen: Orders,
        navigationOptions: () => ({
            tabBarLabel: ({tintColor}) => (<Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:tintColor}}> طلباتي </Text>),
            tabBarIcon: ({tintColor}) => (<Icon name="suitcase" color={tintColor} size={14}/>),
        })
    },
    Profile: { 
        screen: Profile,
        navigationOptions: () => ({
            tabBarLabel: ({tintColor}) => (<Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:tintColor}}> صفحاتي </Text>),
            tabBarIcon: ({tintColor}) => (<Icon name="user" color={tintColor} size={14}/>),  
        })
    },
    Home: { 
        screen: Home,
        navigationOptions: () => ({
            tabBarLabel: ({tintColor}) => (<Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:tintColor}}> الرئيسية </Text>),
            tabBarIcon: ({tintColor}) => (<Icon name="home" color={tintColor} size={14}/>),
        })
    },
  },
  {
    initialRouteName:'Home',
    tabBarOptions: {
      indicatorStyle: {opacity: 0},
      activeTintColor: '#10B3EE',
      inactiveTintColor: '#235784',
      style:{backgroundColor:'#BCDBDF', height:40, justifyContent:'center', alignItems:'center', paddingVertical:5, paddingHorizontal:50, marginTop:2},
    },
    tabBarPosition:'bottom',
    Header: (tabBarLabel)=>{
        return(
            <View>
                <Icon name="back" size={12} color="#235784" />
                <Text> {tabBarLabel} </Text>
                <Icon name="bars" size={12} color="#235784" />
            </View>
        )
    }
  }
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

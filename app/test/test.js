/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import cat1_image from '../components/images/image/1.png';
import cat2_image from '../components/images/image/2.png';
import cat3_image from '../components/images/image/3.png';
import cat4_image from '../components/images/image/4.png';
import cat5_image from '../components/images/image/5.png';
import cat6_image from '../components/images/image/6.png';
import cat7_image from '../components/images/image/7.png';
import cat8_image from '../components/images/image/8.png';
import cat9_image from '../components/images/image/9.png';
import bottom from '../components/images/image/bottom.png';
import logo from '../components/images/image/logo.png';
import Shape4 from '../components/images/image/Shape4.png';
import Shape5 from '../components/images/image/Shape5.png';
import Shape6 from '../components/images/image/Shape6.png';
import Shape7 from '../components/images/image/Shape7.png';
import backk from '../components/images/image/backk.png';


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
    constructor() {
        super()
        this.state = {
            filters: [
                {image:{src: cat1_image, width:2480, height:3508}},
                {image:{src: cat2_image, width:2480, height:3508}},
                {image:{src: cat3_image, width:200, height:200}},
                {image:{src: cat4_image, width:2480, height:3508}},
                {image:{src: cat5_image, width:2480, height:3508}},
                {image:{src: cat6_image, width:200, height:200}},
                {image:{src: cat7_image, width:2480, height:3508}},
                {image:{src: cat8_image, width:2480, height:3508}},
                {image:{src: cat9_image, width:200, height:200}},
            ],
            }
    }
  render () {
       return (
           <View>
               <View style={{height: 50, backgroundColor:"#BCDBDF", flexDirection:'row', padding:10, justifyContent:'space-between'}}> 
                    <Icon name="arrow-left" size={20} color="#235784" />
                    <Text style={{width:290, fontWeight:'bold', fontSize:16, textAlign:'right', color:'#235784'}}>الرئيسية</Text>
                    <Icon name="bars" size={20} color="#235784" />
               </View>
               <View> 
                    <FlatList 
                    data={this.state.filters}
                    renderItem={({item}) =>
                        
                        <View style={{borderRadius:15}}>
                            <View style={{flexDirection:"row", padding:1, justifyContent:'center'}}>
                                <Image source={item.image.src} style={{width:115, height:95}}/>
                            </View>
                        </View>
                    }
                    numColumns={3}
                    keyExtractor={item => toString(item.name)}
                    style={{ borderRadius:5, margin:6}}
                    />
                </View>
                <View style={{width:50, flexDirection:'row', justifyContent:'center', alignItems:'center', margin:5}}>
                    <Image source={backk} style={{width:10, height:10, resizeMode:'contain'}}/>
                    <Text style={{color:'#235784', fontWeight:'bold'}}> المزيد </Text>
                </View>
                <Image source={logo} style={{width:200, height:170, position:'absolute', resizeMode:'stretch', top:350, left:160}}/>
                <Image source={bottom} style={{width:360, height:200, position:'relative', resizeMode:'stretch', top:-50, left:0}}/>
           </View>
       )
  }
}


export default AppRun = createBottomTabNavigator(
  {
    Settings: { 
        screen: Settings,
        navigationOptions: () => ({
            tabBarLabel: ({tintColor}) => (<Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:tintColor}}> الإعدادات </Text>),
            tabBarIcon: ({tintColor}) => (<Image style={{width:16, height:15, resizeMode:'contain'}} source={Shape7}/>),
        })
    },
    Orders: { 
        screen: Orders,
        navigationOptions: () => ({
            tabBarLabel: ({tintColor}) => (<Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:tintColor}}> طلباتي </Text>),
            tabBarIcon: ({tintColor}) => (<Image style={{width:16, height:15, resizeMode:'contain'}} source={Shape6}/>),
        })
    },
    Profile: { 
        screen: Profile,
        navigationOptions: () => ({
            tabBarLabel: ({tintColor}) => (<Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:tintColor}}> صفحاتي </Text>),
            tabBarIcon: ({tintColor}) => (<Image style={{width:16, height:15, resizeMode:'contain'}} source={Shape5}/>),  
        })
    },
    Home: { 
        screen: Home,
        navigationOptions: () => ({
            tabBarLabel: ({tintColor}) => (<Text style={{fontWeight:'bold', fontSize:10, textAlign:'center', color:tintColor}}> الرئيسية </Text>),
            tabBarIcon: ({tintColor}) => (<Image style={{width:16, height:15, resizeMode:'contain'}} source={Shape4}/>),
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

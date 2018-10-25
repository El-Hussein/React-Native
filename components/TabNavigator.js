import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createMaterialTopTabNavigator, createDrawerNavigator} from 'react-navigation';
import CartScreen from './CartScreen';
import FavouriteScreen from './FavouriteScreen';
import SearchScreen from './SearchScreen';
import CompareScreen from './CompareScreen';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import LoginScreen from './LoginScreen';
import ContentComponent from './ContentComponent';
import Category from './Category';


const AppRun = createMaterialTopTabNavigator(
  {
    Home: { screen: HomeScreen },
    Cart: { screen: CartScreen },
    Favourite: { screen: FavouriteScreen },
    Search: { screen: SearchScreen },
    Compare: { screen: CompareScreen },
    // User: { screen: LoginScreen },
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



// const CRN = createDrawerNavigator(
//   {
//     user:{screen: AppRun},
//     Category:{screen: Category, navigationOptions:{
//       headerRight:<TouchableOpacity onPress={() => navigation.navigate("Home")}
//       style={{backgroundColor:'orange', margin:10,padding:10}}>
//       <Text style={{color:'#fff'}}>Home</Text></TouchableOpacity>
//     }}
//   },
//   {
//     showsVerticalScrollIndicator: true,
//     contentComponent:props => <ContentComponent {...props} /> 
//   }
// )

export default class TabNavigator extends Component{
  render() {
      return (
          <AppRun /> 
      )
  }
}


const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS ==='android'? 25:0,
    flex: 1,
  },
  loaderContainer: {
    // marginTop: Platform.OS ==='android'? 25:0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h2text: {
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    color: 'black',
  },
  element: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 2,
    // backgroundColor: '#62AEFF',
    backgroundColor: '#CC542F',
  }
})


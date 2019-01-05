// App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPlace } from './app/actions/plac';
import { sendMessage } from './app/actions/auth';
import RootNavigator from './app/navigator/RootNavigator';
import SplashScreen from './app/components/SplashScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

import {Text} from 'react-native';

// import Home from './app/test/Home';
import Home from './app/components/Home';
import Cart from './app/test/Cart';
import Test from './app/test/test';
import Checkout1 from './app/test/Checkout1';
import Product from './app/test/Product';
import Search from './app/test/Search';
import Login from './app/test/Login';
import Signup from './app/test/Signup';
import Profile from './app/test/Profile';
import EditProfile from './app/test/EditProfile';
import OrderHistory from './app/test/OrderHistory';
import Products from './app/components/Products';
import Category from './app/components/Category';
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      rootPage: <SplashScreen/>
    }
    setTimeout(
      ()=>{
        this.setState({
          rootPage: <RootNavigator />
        });
      },1000
    )
  }

  render() {
    return (
      this.state.rootPage
      // <Search />
      // <SplashScreen/>
      // <Category />
      // <EditProfile />
      // <EditProfile />
      // <Login />
      // <OrderHistory />
      // <Profile />
      // <Cart />
      // <OrderHistory />
      // <Product />
      // <Checkout1 />
      // <Test/>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places,
    message: state.auth.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    },
    send: (message)=>{
      dispatch(sendMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
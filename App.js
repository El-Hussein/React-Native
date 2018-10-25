// App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPlace } from './app/actions/plac';
import { sendMessage } from './app/actions/auth';
import RootNavigator from './app/navigator/RootNavigator';
import SplashScreen from './app/components/SplashScreen';

import Home from './app/test/Home';
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
      // this.state.rootPage
      // <Home />
      // <SplashScreen/>
      <Category />
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
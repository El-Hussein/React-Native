import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import  {Component} from 'react'
import {Text} from 'react-native';

import Home from '../components/Home';
import Category from '../components/Category';
import ContentComponent from '../components/ContentComponent';
import AuthNavigator from './AuthNavigator';
import AuthHome from '../components/auth/AuthHome';

export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const RootNavigator = createDrawerNavigator(
    {
        Home: {
            screen: Home,
            navigationOption:{
                title:"hhhh",
                header: null, 
            }
        },
        Category: {
            screen: AuthHome,
            navigationOption:{
                title:"Category", 
            }
        },
        AuthNavigator: {
            screen: AuthNavigator,
            navigationOptions: {
                title:'AuthNavigator'
            }
        },
    },
    {
    showsVerticalScrollIndicator: true,
    contentComponent:props => <ContentComponent {...props}/> 
    
    }
)


export const RootNav = reduxifyNavigator(RootNavigator, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});

const RootNavWithRedux = connect(mapStateToProps)(RootNav);

export default RootNavWithRedux;
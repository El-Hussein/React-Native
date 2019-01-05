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
import Product from '../test/Product';
import Cart from '../components/Cart';
import ContentComponent from '../components/ContentComponent';
import AuthNavigator from './AuthNavigator';
import UserNavigator from './UserNavigator';
import AuthHome from '../components/auth/AuthHome';
import Search from '../test/Search';

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
            screen: Category,
            navigationOption:{
                title:"Category", 
            }
        },
        Product: {
            screen: Product,
            navigationOption:{
                title:"Product", 
            }
        },
        Cart: {
            screen: Cart,
            navigationOption:{
                title:"Cart", 
            }
        },
        Search: {
            screen: Search,
            navigationOption:{
                title:"Search", 
            }
        },
        UserNavigator: {
            screen: UserNavigator,
            navigationOption:{
                title:"UserNavigator", 
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
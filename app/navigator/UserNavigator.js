import { createStackNavigator } from 'react-navigation';

import AuthHome from "../components/auth/AuthHome";
import Login from "../components/auth/Login";
import RegisterScreen from "../components/auth/Signup";
import ForgetPassword from "../components/auth/ForgetPassword";

import Profile from '../test/Profile';
import EditProfile from '../test/EditProfile';
import OrderHistory from '../test/OrderHistory';
const UserNavigator = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOption:{
            title:"Profile Home", 
        }
    },
    EditProfile: {
        screen: EditProfile,
        navigationOption:{
            title:"Profile Home", 
        }
    },
    OrderHistory: {
        screen: OrderHistory,
        navigationOption:{
            title:"OrderHistory", 
        }
    },
    Wishlist: {
        screen: OrderHistory,
        navigationOption:{
            title:"Wishlist", 
        }
    },
    Compare: {
        screen: OrderHistory,
        navigationOption:{
            title:"ForgetPassword", 
        }
    }
},
{
    navigationOptions:{
        header: null,
    }
})


export default UserNavigator;
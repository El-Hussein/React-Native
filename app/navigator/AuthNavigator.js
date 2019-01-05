import { createStackNavigator } from 'react-navigation';

import AuthHome from "../components/auth/AuthHome";
import Login from "../components/auth/Login";
import RegisterScreen from "../components/auth/Signup";
import ForgetPassword from "../components/auth/ForgetPassword";

const AuthNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOption:{
            title:"Auth Home", 
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOption:{
            title:"Register", 
        }
    },
    ForgetPassword: {
        screen: ForgetPassword,
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


export default AuthNavigator;
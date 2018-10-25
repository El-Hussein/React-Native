import { createStackNavigator } from 'react-navigation';

import AuthHome from "../components/auth/AuthHome";
import RegisterScreen from "../components/auth/RegisterScreen";
import ForgetPassword from "../components/auth/ForgetPassword";

const AuthNavigator = createStackNavigator({
    AuthHome: {
        screen: AuthHome,
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
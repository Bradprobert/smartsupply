import {StackNavigator} from "react-navigation";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";

export const loginFlow = {
    screen: StackNavigator({
        splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            }
        },
        login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        //forgotPassword: {screen: ForgotPasswordScreen}
    }),
    navigationOptions: {
        header: null,
    }
};
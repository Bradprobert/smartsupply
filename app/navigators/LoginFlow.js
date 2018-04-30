import {StackNavigator} from "react-navigation";

import SplashScreen from "../screens/SplashScreen";
import {colors} from "../constants/colors";
import {fonts} from "../constants/fonts";
import {fontSizes} from "../constants/fontSizes";
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
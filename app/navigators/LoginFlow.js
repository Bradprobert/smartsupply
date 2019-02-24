import { createStackNavigator } from 'react-navigation';

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import AccountSetupScreen from '../screens/AccountSetupScreen';

export const loginFlow = {
    screen: createStackNavigator({
        splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            }
        },
        login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            }
        },
        accountSetup: {
            screen: AccountSetupScreen,
            navigationOptions: {
                header: null,
            }
        }
    }),
    navigationOptions: {
        header: null,
    }
};

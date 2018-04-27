import React from "react";
import {StackNavigator, TabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";


import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import {colors} from "../constants/colors";
import {fonts} from "../constants/fonts";
import {fontSizes} from "../constants/fontSizes";
import SettingsScreen from "../screens/SettingsScreen";
import FoodScreen from "../screens/FoodScreen";
import LoginScreen from "../screens/LoginScreen";
import GroceryListScreen from "../screens/GroceryListScreen";

export const MainNavigator = StackNavigator({
        loginFlow: {
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
                        title: 'Smart Supply',
                        headerStyle: {
                            backgroundColor: colors.primaryGreen,
                        },
                        headerTitleStyle: {
                            color: colors.white,
                            fontFamily: fonts.title,
                            fontSize: fontSizes.title,
                        }
                    }
                },
                //forgotPassword: {screen: ForgotPasswordScreen}
            }),
            navigationOptions: {
                header: null,
            }
        },
        mainFlow: {
            screen: StackNavigator({
                home: {
                    screen: TabNavigator({
                        groceryListTab: {
                            screen: GroceryListScreen,
                            navigationOptions: {
                                tabBarLabel: 'Grocery List',
                            }
                        },
                        foodTab: {
                            screen: FoodScreen,
                            navigationOptions: {
                                tabBarLabel: 'My Food',
                            }
                        },
                        settings: {
                            screen: SettingsScreen,
                            navigationOptions: {
                                tabBarLabel: 'Settings',
                            }
                        },
                    }, {
                        navigationOptions: ({navigation}) => ({
                            tabBarIcon: ({focused, tintColor}) => {
                                const {routeName} = navigation.state;
                                let icon;
                                if (routeName === 'groceryListTab') {
                                    icon = <Icon name='list' size={25} color={tintColor}/>;
                                } else if (routeName === 'foodTab') {
                                    icon = <Icon name='list' size={25} color={tintColor}/>;
                                } else if (routeName === 'settings') {
                                    icon = <Ionicon name={'ios-settings'} size={25} color={tintColor}/>;
                                }

                                // You can return any component that you like here! We usually use an
                                // icon component from react-native-vector-icons
                                return icon;
                            },
                        }),
                        tabBarOptions: {
                            activeTintColor: colors.primaryGreen,
                            inactiveTintColor: colors.lightGrey,
                            style: {
                                backgroundColor: colors.white
                            },
                            indicatorStyle: {
                                backgroundColor: colors.primaryGreen
                            }
                        }
                    }),
                    navigationOptions: {
                        title: 'Smart Supply',
                        headerStyle: {
                            backgroundColor: colors.primaryGreen,
                        },
                        headerTitleStyle: {
                            color: colors.white,
                            fontFamily: fonts.title,
                            fontSize: fontSizes.title,
                        }
                    }
                },
            }),
            navigationOptions: {
                header: null,
            }
        },
    },
    /*{
        initialRouteName: 'Splash',
    },*/
);
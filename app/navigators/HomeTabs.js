import React from "react";
import {StackNavigator, TabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import {colors} from "../constants/colors";
import SettingsScreen from "../screens/SettingsScreen";
import FoodScreen from "../screens/FoodScreen";
import GroceryListScreen from "../screens/GroceryListScreen";
import ScanBarcodeScreen from "../screens/ScanBarcodeScreen";

export const homeTabs = TabNavigator({
    groceryListTab: {
        screen: GroceryListScreen,
        navigationOptions: {
            tabBarLabel: 'Grocery List',
        }
    },
    screen: StackNavigator({
        foodTab: {
            screen: FoodScreen,
            navigationOptions: {
                tabBarLabel: 'My Food',
            }
        },
        barcodeScan: {
            screen: ScanBarcodeScreen,
            navigationOptions: {
                tabBarLabel: 'Add Food'
            }
        }
    }, {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: true
        }
    }),
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
            } else if (routeName === 'settings') {
                icon = <Ionicon name={'ios-settings'} size={25} color={tintColor}/>;
            } else if (routeName === 'screen') {
                navigation.state.routes.map((route) => {
                    if (route.routeName === 'barcodeScan') {
                        icon = <Ionicon name='ios-barcode' size={25} color={tintColor}/>
                    } else if (route.routeName === 'foodTab') {
                        icon = <Icon name='list' size={25} color={tintColor}/>;
                    }
                })
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
});
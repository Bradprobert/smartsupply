import React from "react";
import {StackNavigator} from "react-navigation";

import {colors} from "../constants/colors";
import {fonts} from "../constants/fonts";
import {fontSizes} from "../constants/fontSizes";
import {homeTabs} from "./HomeTabs";
import {loginFlow} from "./LoginFlow";
import strings from '../constants/strings';

const brandName = 'Smart Supply';
export const MainNavigator = StackNavigator({
    loginFlow: loginFlow,
    mainFlow: {
        screen: homeTabs,
        navigationOptions: {
            title: strings.brandName,
            headerStyle: {
                backgroundColor: colors.primaryGreen,
            },
            headerTitleStyle: {
                color: colors.white,
                fontFamily: fonts.title,
                fontSize: fontSizes.title,
            },
        },
    },
});

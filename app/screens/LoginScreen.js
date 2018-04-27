import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import {colors} from "../constants/colors";

export default class LoginScreen extends Component {

    onPressLogin = () => {
        this.props.navigation.navigate('foodTab')
    };


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                onPress={this.onPressLogin}
                title="Login"
                color={colors.primaryGreen}/>
            </View>
        );
    }
}
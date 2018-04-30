import React, {Component} from "react";
import {View} from "react-native";
import ActionButton from 'react-native-action-button';

import {colors} from "../constants/colors";

export default class FoodScreen extends Component {
    state = {
        scanBarcode: false,
    }

    showBarcodeScanner = () => {
        //this.setState({scanBarcode: true})
        this.props.navigation.navigate('barcodeScan')
    }

    render() {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActionButton
                        buttonColor={colors.primaryGreen}
                        onPress={this.showBarcodeScanner}
                    />
                </View>
            );
        }

}
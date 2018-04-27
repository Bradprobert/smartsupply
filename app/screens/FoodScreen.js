import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";
import ActionButton from 'react-native-action-button';
import {BarCodeScanner, Permissions} from 'expo';

import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from "../constants/colors";
import BarcodeScannerModal from "../modals/BarcodeScannerModal";

export default class FoodScreen extends Component {
    state = {
        scanBarcode: false,
    }

    showBarcodeScanner = () => {
        this.setState({scanBarcode: true})
    }

    render() {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <BarcodeScannerModal modalVisible={this.state.scanBarcode}/>
                    <ActionButton
                        buttonColor={colors.primaryGreen}
                        onPress={this.showBarcodeScanner}
                    />
                </View>
            );
        }

}
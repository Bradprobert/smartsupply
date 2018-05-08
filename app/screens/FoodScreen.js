import React, { Component } from 'react';
import { View, WebView, StyleSheet, FlatList } from 'react-native';
import ActionButton from 'react-native-action-button';

import { colors } from '../constants/colors';
import ItemCard from '../components/ItemCard';
import { testData } from '../constants/testData';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default class FoodScreen extends Component {
    state = {
        scanBarcode: false,
    };

    showBarcodeScanner = () => {
        //this.setState({scanBarcode: true})
        this.props.navigation.navigate('barcodeScan');
    };

    render() {

        return (
          <View style={styles.container}>
              <FlatList
                data={testData}
                renderItem={({ item }) => <ItemCard itemName={item.name}
                                                    walmartPrice={item.walmartPrice}
                                                    amazonPrice={item.amazonPrice}/>}/>
              <ActionButton
                buttonColor={colors.primaryGreen}
                onPress={this.showBarcodeScanner}
              />
          </View>
        );
    }

}

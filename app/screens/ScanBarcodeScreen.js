import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class ScanBarcodeScreen extends Component {
    state = {
        hasCameraPermission: null,
        currBarcode: 0,
        scannerHeight: 0,
        scannerWidth: 0,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    handleBarCodeRead = ({ type, data }) => {
        if (this.state.currBarcode !== data) {
            this.setState({ currBarcode: data });
            const upcLookup = 'https://api.upcitemdb.com/prod/trial/lookup?upc=' + data;
            fetch(upcLookup)
              .then((response) => response.json())
              .then((responseJson) => {
                  console.log(responseJson.items[0].brand);
                  console.log(responseJson.items[0].description);
              })
              .catch((error) => {
                  console.error(error);
              });
        }
    };


    calculateScannerSize = (event) => {
        const { x, y, height, width } = event.nativeEvent.layout;
        this.setState({
            scannerHeight: height,
            scannerWidth: width,
        });
    };

    render() {
        const { hasCameraPermission } = this.state;

        return (
          <View onLayout={(event) => this.calculateScannerSize(event)} style={styles.container}>
              {hasCameraPermission === null ?
                <Text>Requesting for camera permission</Text> : null}
              {hasCameraPermission === false ?
                <Text>No access to camera</Text> :
                <View style={styles.container}>
                    <View style={{
                        ...StyleSheet.absoluteFillObject,
                        borderBottomColor: 'black',
                        borderBottomWidth: 3,
                        height: this.state.scannerHeight / 2,
                        width: this.state.scannerWidth,
                        zIndex: 2,
                        backgroundColor: 'transparent'
                    }}
                    />
                    <BarCodeScanner onBarCodeRead={this.handleBarCodeRead} style={{
                        height: this.state.scannerHeight,
                        width: this.state.scannerWidth,
                    }}/>
                </View>
              }
          </View>
        );
    }
}
;

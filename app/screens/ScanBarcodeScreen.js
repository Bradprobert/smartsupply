import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import {BarCodeScanner, Permissions} from "expo";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class BarcodeScannerModal extends Component {
    state = {
        hasCameraPermission: null,
        barcodeFound: false,
    };

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    handleBarCodeRead = ({type, data}) => {
        if (this.state.barcodeFound === false) {
            this.setState({barcodeFound: true});
            alert(data);
        }
    }

    calculateScannerSize = () => {
        const {height, width} = Dimensions.get('window');
        const calcHeight = height - (22 - 12 - 16 - 12) * 2 - 200;
        const calcWidth = width - (22 - 12) * 2 - 75;
        console.log('height: ' + calcHeight + '\nwidth: ' + calcWidth);
        return {
            height: calcHeight,
            width: calcWidth,
        }
    }

    render() {
        const {hasCameraPermission} = this.state;

        return (
            <View style={styles.container}>
                {hasCameraPermission === null ?
                    <Text>Requesting for camera permission</Text> : null}
                {hasCameraPermission === false ?
                    <Text>No access to camera</Text> :
                    (<View>
                        <BarCodeScanner onBarCodeRead={this.handleBarCodeRead} style={this.calculateScannerSize()}/>
                    </View>)}
            </View>
        );
    }
}
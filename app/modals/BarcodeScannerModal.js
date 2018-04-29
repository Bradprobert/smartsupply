import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, TouchableOpacity, View} from 'react-native';
import {BarCodeScanner, Permissions} from "expo";
import Modal from 'react-native-modal'
import {colors} from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.primaryGreen,
        padding: 12,
        margin: 16,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    buttonText: {
        color: colors.white
    },
    modalContent: {
        backgroundColor: colors.white,
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    barcodeScanner: {
        margin: 12,
    },
});

export default class BarcodeScannerModal extends Component {
    state = {
        hasCameraPermission: null,
        visible: this.props.visible,
        barcodeFound: false,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.visible !== prevState.visible) {
            return {visible: nextProps.visible}
        }
        return null
    }

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
        const calcHeight = height - (22 - 12 - 16 - 12) * 2- 200;
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
            <Modal isVisible={this.state.visible}>
                <View style={styles.modalContent}>
                    {hasCameraPermission === null ?
                        <Text>Requesting for camera permission</Text> : null}
                    {hasCameraPermission === false ?
                        <Text>No access to camera</Text> :
                        (<View>
                            <BarCodeScanner onBarCodeRead={this.handleBarCodeRead} style={this.calculateScannerSize()}/>
                        </View>)}
                    <TouchableOpacity onPress={() => {
                        this.setState({visible: false})
                    }}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>close</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}
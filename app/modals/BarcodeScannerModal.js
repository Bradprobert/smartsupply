import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {BarCodeScanner, Permissions} from "expo";
import Modal from 'react-native-modal'
import {colors} from "../constants/colors";

export default class BarcodeScannerModal extends Component {
    state = {
        hasCameraPermission: null,
        visible: this.props.visible
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
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
                        (<View style={{flex: 1, height: 50}}>
                            <BarCodeScanner onBarCodeRead={this.handleBarCodeRead} style={styles.barcodeScanner}/>
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
        height: 400,
        width: 400,
        margin: 12,
    },
});
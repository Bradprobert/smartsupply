import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {BarCodeScanner, Permissions} from "expo";

export default class BarcodeScannerModal extends Component {
    state = {
        modalVisible: this.props.modalVisible,
        hasCameraPermission: null
    };

    async componentWillMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    handleBarCodeRead = ({type, data}) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }

    render() {
        const {hasCameraPermission} = this.state;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                    {hasCameraPermission === null ?
                        <Text>Requesting for camera permission</Text> : null}
                    {hasCameraPermission === false ?
                        <Text>No access to camera</Text> : null}
                    <BarCodeScanner
                        onBarCodeRead={this.handleBarCodeRead}
                        style={StyleSheet.absoluteFill}
                    />
                    <TouchableHighlight
                        onPress={this.setModalVisible(!this.state.modalVisible)}>
                        <Text>close modal</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        );
    }
}
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import * as firebase from 'firebase';

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
                  const newItem = responseJson.items[0];
                  const itemDetails = {
                      upc: newItem.upc,
                      name: newItem.title,
                      description: newItem.description,
                      images: newItem.images
                  };
                  this.addToDatabase(itemDetails);
              })
              .catch((error) => {
                  console.error(error);
              });
        }
    };

    addToDatabase = (item) => {
        const userId = firebase.auth().currentUser.uid;
        const itemsRef = firebase.database()
          .ref('users/' + userId + '/items');
        itemsRef.orderByChild('upc')
          .equalTo(item.upc)
          .once('value', snapshot => {
              if (snapshot.val()) {
                  alert('item already added');
                  this.props.navigation.navigate('foodTab');
              } else {
                  itemsRef.push(item, error => {
                      if (error) {
                          alert('error adding item');
                      } else {
                          this.props.navigation.navigate('foodTab');
                      }
                  });
              }
          });

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
                        zIndex: 2,
                        backgroundColor: 'transparent',
                        borderBottomWidth: 3,
                        height: this.state.scannerHeight / 2,
                        width: this.state.scannerWidth
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

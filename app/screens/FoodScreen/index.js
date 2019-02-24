import React, { Component } from 'react';
import { View, FlatList, Platform } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';

import { colors } from '../../constants/colors';
import ItemCard from '../../components/ItemCard/index';
import styles from './styles';
import DetailsModal from '../../components/DetailsModal';

export default class FoodScreen extends Component {
    state = {
        items: [],
        showDetails: false,
        itemDetails: {},
    };


    componentDidMount() {
        const userId = firebase.auth().currentUser.uid;
        const itemsRef = firebase.database()
          .ref('users/' + userId + '/items');

        itemsRef.on('child_added', data => {
            const newItem = data.val();
            this.setState({ items: this.state.items.concat(newItem) });
        });

        itemsRef.on('child_changed', data => {
            let newItems = this.state.items;
            for (let item in newItems) {
                if (item.upc === data.val().upc) {
                    item = data.val();
                }
            }
            this.setState({ items: newItems });
        });

        itemsRef.on('child_removed', data => {
            const index = this.state.items.map(e => {
                return e.upc;
            })
              .indexOf(data.val().upc);
            if (index > -1) {
                let newItems = this.state.items;
                newItems.splice(index, 1);
                this.setState({ items: newItems });
            }
        });
    }

    deleteItem = (upc) => {
        const userId = firebase.auth().currentUser.uid;
        const itemsRef = firebase.database()
          .ref('users/' + userId + '/items');
        itemsRef.orderByChild('upc')
          .equalTo(upc)
          .once('value', snap => {
              snap.forEach(data => {
                  if (data.val().upc === upc) {
                      data.ref.remove();
                  }
              });
          });
    };

    addToGroceryList = (item) => {
        const userId = firebase.auth().currentUser.uid;
        const groceryItemsRef = firebase.database()
          .ref('users/' + userId + '/groceryItems');
        groceryItemsRef.push(item, error => {
            if (error) {
                alert('error adding item');
            } else {
                alert('Item added!');
            }
        });
    };

    showBarcodeScanner = () => {
        //this.setState({scanBarcode: true})
        this.props.navigation.navigate('barcodeScan');
    };

    createNewEntry = () => {
        alert('create new item.');
    };

    renderSeparator = () => {
        return (
          <View style={styles.separator}/>
        );
    };

    getIconName = () => {
        return Platform.OS === 'ios' ? 'ios-barcode-outline' : 'md-barcode';
    };

    setModalVisible = (item, value) => {
        this.setState({
            showDetails: value,
            itemDetails: item
        });
    };

    showModal = () => {
        return (
          <DetailsModal visible={this.state.showDetails}
                        setModalVisible={(item, value) => this.setModalVisible(item, value)}
                        data={this.state.itemDetails}/>
        );
    };

    render() {
        return (
          <View style={styles.container}>
              {this.showModal()}
              <FlatList style={styles.list} data={this.state.items}
                        renderItem={({ item }) => <ItemCard name={item.name}
                                                            description={item.description}
                                                            images={item.images}
                                                            deleteItem={() => this.deleteItem(item.upc)}
                                                            addToGroceryList={() => this.addToGroceryList(item)}
                                                            onPress={() => {
                                                                this.setModalVisible(item, true);
                                                            }}
                                                            groceryList={false}/>}
                        keyExtractor={item => item.upc}
                        ItemSeparatorComponent={this.renderSeparator}/>
              <ActionButton buttonColor={colors.primaryGreen}>
                  <ActionButton.Item buttonColor='#3498db' title="Scan Barcode"
                                     onPress={this.showBarcodeScanner}>
                      <Icon size={25} name={this.getIconName()} style={styles.actionButtonIcon}/>
                  </ActionButton.Item>
              </ActionButton>
          </View>
        );
    }

}

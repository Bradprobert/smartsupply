import React from 'react';
import { Button, FlatList, Image, Modal, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from '../../constants/colors';

const DetailsModal = props => {
    return (
      <Modal animationType="fade" transparent visible={props.visible}
             onRequestClose={() => props.setModalVisible({}, false)}>
          <View style={styles.container}>
              <View style={styles.modalContainer}>
                  <Text style={styles.name}>{props.data.name}</Text>
                  <FlatList horizontal data={props.data.images}
                            renderItem={({ item }) => <Image style={styles.image}
                                                             source={{ uri: item }}/>}
                            keyExtractor={(item, index) => index.toString()}
                  />
                  <Text style={styles.description}>{props.data.description}</Text>
                  <Button onPress={() => props.setModalVisible({}, false)} title='Close'
                          color={colors.primaryGreen}/>
              </View>
          </View>
      </Modal>
    );
};

DetailsModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    setModalVisible: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

export default DetailsModal;

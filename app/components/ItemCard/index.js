import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ItemCard = props => {
    return (
      <View style={styles.container}>
          <Text>{props.itemName}</Text>
          <View>
              <Text>{props.walmartPrice}</Text>
              <Text>{props.amazonPrice}</Text>
          </View>
      </View>
    );
};

ItemCard.propTypes = {
    itemName: PropTypes.string.isRequired,
    walmartPrice: PropTypes.number.isRequired,
    amazonPrice: PropTypes.number.isRequired,
};

export default ItemCard;

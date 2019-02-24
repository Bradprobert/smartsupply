import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Swipeout from 'react-native-swipeout';
import { colors } from '../../constants/colors';

ItemCard = props => {

    const rightButtons = [
        {
            text: 'Add to Grocery List',
            backgroundColor: colors.primaryGreen,
            onPress: props.addToGroceryList
        },
        {
            text: 'delete',
            type: 'delete',
            onPress: props.deleteItem
        }
    ];
    const groceryRightButtons = [
        {
            text: 'delete',
            type: 'delete',
            onPress: props.deleteItem
        }
    ];
    return (
      <Swipeout right={props.groceryList ? groceryRightButtons : rightButtons}
                style={styles.swipeContainer} autoClose={true}>
          <TouchableOpacity onPress={props.onPress} style={styles.container}>
              <Image style={styles.image} source={{ uri: props.images[0] }}/>
              <Text style={styles.name}>{props.name}</Text>
          </TouchableOpacity>
      </Swipeout>
    );
};

ItemCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    addToGroceryList: PropTypes.func,
    groceryList: PropTypes.bool.isRequired,
};

export default ItemCard;

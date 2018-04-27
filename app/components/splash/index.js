import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from "react-native";

import styles from './styles'

const Splash = props => {
    return (
        <View style={styles.container}>
            {props.fontLoaded ? <Text style={styles.brandName}>Smart Supply</Text> : null}
        </View>
    );
};

Splash.propTypes = {

};

export default Splash;
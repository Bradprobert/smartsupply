import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from "react-native";
import * as Progress from 'react-native-progress';

import styles from './styles'
import {colors} from "../../constants/colors";

const Splash = props => {
    return (
        <View style={styles.container}>
            {props.fontLoaded ? <Text style={styles.title}>Smart Supply</Text> : null}
            <Progress.CircleSnail size={50} indeterminate={true} color={colors.white}/>
        </View>
    );
};

Splash.propTypes = {

};

export default Splash;

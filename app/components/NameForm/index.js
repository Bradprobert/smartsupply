import React from 'react';
import { TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../LoginForm/styles';

const NameForm = props => {
    return (
      <View>
          <TextInput style={styles.textInput} placeholder='First Name' value={props.firstName}
                     onChangeText={(first) => props.onChangeFirstName(first)}/>
          <TextInput style={styles.textInput} placeholder='Last Name' value={props.lastName}
                     onChangeText={(last) => props.onChangeLastName(last)}/>
      </View>
    );
};

NameForm.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onChangeFirstName: PropTypes.func.isRequired,
    onChangeLastName: PropTypes.func.isRequired,
};

export default NameForm;

import React from 'react';
import { colors } from '../../constants/colors';
import styles from './styles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginForm = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Text style={styles.brandName}>Smart Supply</Text>
      </View>
      <TextInput style={styles.textInput} placeholder='example@email.com' editable={true}
                 maxLength={40}
                 onChangeText={(email) => props.onChangeEmail(email)}/>
      <TextInput style={styles.textInput} placeholder='Password' editable={true} maxLength={40}
                 onChangeText={(password) => props.onChangePassword(password)}/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} color={colors.primaryGreen}
                          onPress={props.onPressSignUp}>
          <Text>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} color={colors.primaryGreen}
                          onPress={props.onPressLogin}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

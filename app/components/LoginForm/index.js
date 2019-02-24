import React from 'react';
import { colors } from '../../constants/colors';
import styles from './styles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import strings from '../../constants/strings';

const LoginForm = (props) => {
    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.title}>{strings.brandName}</Text>
          </View>
          <TextInput style={styles.textInput} placeholder='example@email.com'
                     keyboardType='email-address' value={props.email}
                     onChangeText={(email) => props.onChangeEmail(email)}/>
          <TextInput style={styles.textInput} placeholder='Password' secureTextEntry={true}
                     value={props.password}
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
          <TouchableOpacity style={styles.quickButton} color={colors.primaryGreen}
                            onPress={props.onQuickLogin}>
              <Text>QUICK LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
};

export default LoginForm;

import React, {Component} from "react";
import {Button, TextInput, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {colors} from "../constants/colors";
import * as firebase from "firebase"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.primaryGreen
    },
    brandContainer: {
        alignItems: 'center',
    },
    brandName: {
        color: '#FFFFFF',
        fontSize: 48,
        fontFamily: 'poiret-one-regular',
    },
    textInput: {
        height: 60,
        padding: 12,
        margin: 12,
        borderColor: colors.lightGrey,
        backgroundColor: colors.white
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: colors.white,
        padding: 12,
        margin: 12,
        alignItems: 'center'
    }
});

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onPressLogin = () => {
        if (this.state.email === '' || this.state.password === '') {
            return;
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
                this.props.navigation.navigate('mainFlow');
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else if (errorCode === 'auth/user-not-found') {
                    alert('User not found.');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email.');
                } else if (errorCode === 'auth/user-disabled') {
                    alert('User disabled.');
                }
            });
        }

    };

    onPressSignUp = () => {
        if (this.state.email === '' || this.state.password === '') {
            return;
        } else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
                this.props.navigation.navigate('mainFlow');
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/email-already-in-use') {
                    alert('Email already in use.');
                } else if (errorCode === 'auth/operation-not-allowed') {
                    alert('Unknown error');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('Invalid email.');
                } else if (errorCode === 'auth/weak-password') {
                    alert('Weak password.');
                }
            });
        }

    };

    loginWithEmail = (event) => {
        alert('login in with email button pressed')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.brandContainer}>
                    <Text style={styles.brandName}>Smart Supply</Text>
                </View>
                <TextInput style={styles.textInput} placeholder='example@email.com' editable={true} maxLength={40}
                           onChangeText={(email) => this.setState({email: email})}/>
                <TextInput style={styles.textInput} placeholder='Password' editable={true} maxLength={40}
                           onChangeText={(password) => this.setState({password: password})}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} color={colors.primaryGreen} onPress={this.onPressSignUp}>
                        <Text>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} color={colors.primaryGreen} onPress={this.onPressLogin}>
                        <Text>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
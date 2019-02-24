import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Platform, Switch } from 'react-native';
import * as firebase from 'firebase';

import NameForm from '../../components/NameForm';
import styles from '../../screens/AccountSetupScreen/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants/colors';

export default class AccountSetupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            first: '',
            last: '',
            useWalmart: false,
            useAmazon: false,
            useTarget: false,
        };
    }

    renderContent = () => {
        if (this.state.step === 1) {
            return (
              <NameForm onChangeFirstName={(first) => this.setState({ first: first })}
                        onChangeLastName={(last) => this.setState({ last: last })}
                        firstName={this.state.first} lastName={this.state.last}/>
            );
        } else if (this.state.step === 2) {
            return (
              <View>
                  <View style={styles.switchContainer}>
                      <Text style={styles.buttonText}>Walmart</Text>
                      <Switch onValueChange={(value) => this.setState({ useWalmart: value })}
                              value={this.state.useWalmart}/>
                  </View>
                  <View style={styles.switchContainer}>
                      <Text style={styles.buttonText}>Amazon</Text>
                      <Switch onValueChange={(value) => this.setState({ useAmazon: value })}
                              value={this.state.useAmazon}/>
                  </View>
                  <View style={styles.switchContainer}>
                      <Text style={styles.buttonText}>Target</Text>
                      <Switch onValueChange={(value) => this.setState({ useTarget: value })}
                              value={this.state.useTarget}/>
                  </View>
              </View>
            );
        }
    };

    renderDots = () => {
        return (
          <View style={styles.dotsContainer}>
              <View style={[styles.dot, this.state.step === 1 && styles.activeDot]}/>
              <View style={[styles.dot, this.state.step === 2 && styles.activeDot]}/>
              <View style={[styles.dot, this.state.step === 3 && styles.activeDot]}/>
          </View>
        );
    };

    selectTitle = () => {
        if (this.state.step === 1) {
            return 'Account Setup';
        } else if (this.state.step === 2) {
            return 'Where do you shop for groceries?';
        } else if (this.state.step === 3) {
            return 'Account setup is complete!';
        }
    };

    getForwardIconName = () => {
        return Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
    };

    getBackIconName = () => {
        return Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back';
    };

    incrementStep = () => {
        if (this.state.step < 3) {
            this.setState({ step: this.state.step + 1 });
        }
    };

    decrementStep = () => {
        if (this.state.step > 1) {
            this.setState({ step: this.state.step - 1 });
        }
    };

    submitForm = () => {
        const userId = firebase.auth().currentUser.uid;
        firebase.database()
          .ref('users/' + userId)
          .set({
              first: this.state.first,
              last: this.state.last,
              stores: {
                  walmart: this.state.useWalmart,
                  amazon: this.state.useAmazon,
                  target: this.state.useTarget,
              }
          })
          .catch(function (error) {
              console.error('Error writing to ref: ', error);
          });
        this.props.navigation.navigate('mainFlow');
    };

    render() {
        return (
          <View style={styles.container}>
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>{this.selectTitle()}</Text>
                  {this.state.step === 2 ?
                    <Text style={styles.subtitle}>(Select all that apply)</Text> : null}
              </View>
              {this.renderContent()}
              <View style={styles.bottomNav}>
                  {this.state.step > 1 ?
                    <TouchableOpacity style={styles.backButton} onPress={this.decrementStep}>
                        <Icon name={this.getBackIconName()} size={45} color={colors.white}/>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity> : <View style={styles.backButton}/>}
                  {this.renderDots()}
                  {this.state.step < 3 ?
                    <TouchableOpacity style={styles.nextButton} onPress={this.incrementStep}>
                        <Text style={styles.buttonText}>Next</Text>
                        <Icon name={this.getForwardIconName()} size={45}
                              color={colors.white}/>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.nextButton} onPress={this.submitForm}>
                        <Text style={styles.buttonText}>Finish</Text>
                    </TouchableOpacity>}
              </View>
          </View>

        );
    }
}

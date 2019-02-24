import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import * as firebase from 'firebase';

import { MainNavigator } from './app/navigators';
import config from './firebaseconfig';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader', 'Setting a timer']);
firebase.initializeApp(config);


export default class App extends Component {
    render() {
        return (
          <MainNavigator/>
        );
    }
}

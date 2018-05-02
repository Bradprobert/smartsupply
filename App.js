import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import * as firebase from 'firebase';

import {MainNavigator} from './app/navigators';
import rootReducer from './app/reducers'
import config from "./firebaseconfig";

firebase.initializeApp(config);

const store = createStore(rootReducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        );
    }
}
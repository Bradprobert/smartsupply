import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {MainNavigator} from './app/navigators';
import store from './app/store'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainNavigator/>
            </Provider>
        );
    }
}
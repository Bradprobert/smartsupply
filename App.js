import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";

import {MainNavigator} from './app/navigators';
import rootReducer from './app/reducers'

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
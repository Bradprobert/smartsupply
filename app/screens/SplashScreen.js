import React, {Component} from 'react';
import {Font} from 'expo';
import * as firebase from 'firebase';

import Splash from "../components/splash";

export default class SplashScreen extends Component {
    state = {
        fontLoaded: false,
        appLoaded: false
    };

    async componentDidMount() {
        await Font.loadAsync({
            'poiret-one-regular': require('../assets/fonts/Poiret_One/PoiretOne-Regular.ttf'),
            'raleway-regular': require('../assets/fonts/Raleway/Raleway-Regular.ttf'),
            'raleway-bold': require('../assets/fonts/Raleway/Raleway-Bold.ttf'),
        });
        this.setState({ fontLoaded: true });
        this.signInUser();
    }

    signInUser = () => {
        const user = firebase.auth().currentUser;
        if (user) {
            this.props.navigation.navigate('mainFlow');
        } else {
            this.props.navigation.navigate('login');
        }
    };


    render() {
        return (
            <Splash fontLoaded={this.state.fontLoaded}/>
        )
    }
};

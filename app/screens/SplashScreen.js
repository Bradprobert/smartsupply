import React, {Component} from 'react';
import {Font} from 'expo';
import {NavigationActions} from 'react-navigation';

import Splash from "../components/splash";

export default class SplashScreen extends Component {
    state = {
        fontLoaded: false,
        appLoaded: false
    };

    async componentDidMount() {
        await Font.loadAsync({
            'poiret-one-regular': require('../assets/fonts/Poiret_One/PoiretOne-Regular.ttf')
        });
        await setTimeout(() => {
            this.setState({appLoaded: true})
        }, 3000);
        this.setState({fontLoaded: true})
    }


    componentDidUpdate() {
        if (this.state.appLoaded) {
            this._navigateTo('login')
        }
    }

    _navigateTo = (routeName: string) => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName})]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <Splash fontLoaded={this.state.fontLoaded}/>
        )
    }
};
'use strict';
// @flow

import React from 'react';
import {Navigator} from 'react-native';
import WelcomeScene from './WelcomeScene';
import InfoScene from './InfoScene';

import GlobalStyles from './../resources/styles/global';

const noSwipe = {
    ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: {
        pop: {},
    },
};

export default class IntroFlowScene extends React.Component {
    render() {
        const initialRoute = {
            index: 0,
            component: WelcomeScene,
            passProps: {
                onContinue: function () {
                    this.props.navigator.push({
                        index: 1,
                        component: InfoScene,
                        reset: true
                    });
                }
            },
            reset: false
        };

        console.log('here2');

        return (
            <Navigator
                style={[GlobalStyles.colors.screen, GlobalStyles.layout.root]}

                initialRouteStack={[initialRoute]}

                ref="navigator"

                renderScene={(route, navigator) => {
                    let props = route.passProps;
                    if (typeof props !== 'object' || props === null) {
                        props = {};
                    }
                    props.navigator = navigator;

                    let factory = React.createFactory(route.component);

                    return factory(props);
                }}

                onDidFocus={(route) => {
                    if (route.reset) {
                        console.log('resetting.');
                        this.refs.navigator.immediatelyResetRouteStack([route]);
                    }
                }}

                configureScene={(route) => {
                    if (route.index === 0) {
                        return noSwipe;
                    }
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}

                >

            </Navigator>
        );
    }
}
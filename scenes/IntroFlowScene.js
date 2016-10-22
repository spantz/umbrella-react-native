'use strict';
// @flow

import React from 'react';
import {Navigator} from 'react-native';
import WelcomeScene from './WelcomeScene';
import InfoScene from './InfoScene';

export default class IntroFlowScene extends React.Component {
    render() {
        const initialRoute = {
            index: 0,
            component: WelcomeScene,
            passProps: {
                onContinue: function () {
                    this.props.navigator.push({
                        index: 0,
                        component: InfoScene
                    });
                }
            },
            reset: false
        };

        return (
            <Navigator
                initialRoute={initialRoute}
                renderScene={(route, navigator) => {
                    let props = route.passProps;
                    if (typeof props !== 'object' || props === null) {
                        props = {};
                    }
                    props.navigator = navigator;

                    let factory = React.createFactory(route.component);

                    return factory(props);
                }}

                onDidFocus={(route, navigator) => {
                    if (route.reset) {
                        navigator.immediatelyResetRouteStack([route]);
                    }
                }}

                >

            </Navigator>
        );
    }
}
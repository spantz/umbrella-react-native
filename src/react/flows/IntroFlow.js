"use strict";
// @flow

import React from "react";
import {Navigator} from "react-native";
import WelcomeScene from "../scenes/WelcomeScene";
import InfoScene from "../scenes/InfoScene";

import GlobalStyles from "../../resources/styles/global";

const noSwipe = {
    ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: {
        pop: {}
    }
};

export default class IntroFlow extends React.Component {
    render() {
        const initialRoute = {
            index: 0,
            component: WelcomeScene,
            passProps: {
                onContinue: function() {
                    this.props.navigator.push({
                        index: 1,
                        component: InfoScene,
                        reset: true
                    });
                }
            },
            reset: false
        };

        return (
            <Navigator
                style={[GlobalStyles.colors.screen]}

                initialRouteStack={[initialRoute]}

                ref="navigator"

                renderScene={(route, navigator) => {
                    let props = route.passProps;
                    if (typeof props !== "object" || props === null) {
                        props = {};
                    }
                    props.navigator = navigator;

                    let factory = React.createFactory(route.component);

                    return factory(props);
                }}

                onDidFocus={(route) => {
                    if (route.reset) {
                        route.reset = false;
                        this.refs.navigator.immediatelyResetRouteStack([route]);
                    }
                }}

                configureScene={() => {
                    return noSwipe;
                }}

                >

            </Navigator>
        );
    }
}
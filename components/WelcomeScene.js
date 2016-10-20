'use strict';
// @flow

import React, {Component} from 'react';
import {Navigator} from 'react-native';

import SecondScene from './SecondScene';

export default class WelcomeScene extends Component {

    render() {
        const routes = [
            {
                title: 'Welcome',
                index: 0
            },
            {
                title: 'Second Screen',
                index: 1
            }
        ];

        return (
            <Navigator
                initialRoute={routes[0]}
                renderScene={(route, navigator) => {
                    return (
                        <SecondScene
                            title={route.title}

                            onForward={() => {
                              const nextIndex = route.index + 1;
                              navigator.push({
                                title: 'Scene ' + nextIndex,
                                index: nextIndex,
                              });
                            }}

                            // Function to call to go back to the previous scene
                            onBack={() => {
                              if (route.index > 0) {
                                navigator.pop();
                              }
                            }}
                            />
                    );
                }}
            />
        );
    }
}
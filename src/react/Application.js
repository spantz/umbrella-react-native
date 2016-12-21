"use strict";
// @flow

import React from "react";
import {
    StatusBar,
    Image
} from "react-native";

import IntroFlow from "./flows/IntroFlow";
import ActivityHomeScene from "./scenes/ActivityHomeScene";

import * as Styles from "./../resources/styles";
import {background} from "./../resources/images";
import realm from "./../storage";

type Props = {};

export default class Application extends React.Component {
    props: Props;

    state: {
        //TODO type hint user
        user: any
    };

    constructor(props: Props) {
        super(props);
        //TODO if no ID, create new user, store it in asyncStorage
        this._loadInitialState();
    }

    _loadInitialState() {
        let users = realm.objects("User").filtered("id = 1");
        let user;
        if (users.length > 0) {
            //Retrieve the first user out of the list
            user = users.slice(0, 1)[0];
        } else {
            realm.write(() => {
                user = realm.create("User", {
                    id: 1,
                    completedIntro: false
                });
            });
        }

        this.state = {
            user: user
        };
    }

    render() {
        let user = this.state.user;
        let startingComponent;
        if (user.hasCompletedIntroFlow()) {
            startingComponent = (<ActivityHomeScene/>);
        } else {
            startingComponent = (<IntroFlow/>);
        }
        return (
            <Image style={Styles.Global.Image.background} source={background}>
                <StatusBar barStyle="light-content"/>
                {startingComponent}
            </Image>
        );
    }
}
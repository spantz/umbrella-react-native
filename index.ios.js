"use strict";

import React from "react";
import {
    AppRegistry,
    StatusBar,
    Image
} from "react-native";

import BreatheActivity from "./src/react/scenes/activities/BreatheActivity";

export default class Umbrella extends React.Component {
    render() {
        return (
            <BreatheActivity/>
        );
    }
}

AppRegistry.registerComponent("Umbrella", () => Umbrella);

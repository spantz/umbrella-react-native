"use strict";

import React from "react";
import {AppRegistry} from "react-native";

import Application from "./src/react/Application";

export default class Umbrella extends React.Component {
    render() {
        return (
            <Application/>
        );
    }
}

AppRegistry.registerComponent("Umbrella", () => Umbrella);

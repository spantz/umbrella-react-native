"use strict";
// @flow

import {
    StyleSheet
} from "react-native";

const base = {
    fontFamily: "Montserrat",
    color: "#FFF",
    textAlign: "center",
    padding: 10
};

export {base};

export default StyleSheet.create({
    base,
    hero: StyleSheet.flatten([
        base,
        {
            fontWeight: "bold",
            fontSize: 30
        }
    ]),
    subhero: StyleSheet.flatten([
        base,
        {
            fontWeight: "normal",
            fontSize: 20,
            color: "#EAEAEA"
        }
    ])
});
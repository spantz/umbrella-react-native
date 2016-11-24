"use strict";
// @flow

import {
    StyleSheet
} from "react-native";

import Typography from "./typography.js";
import Buttons from "./buttons.js";
import Utilities from "./utilities.js";

const Global = {
    Image: StyleSheet.create({
        background: {
            resizeMode: "contain"
        },
        logo: {
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: 90,
            marginBottom: 35
        }
    }),
    View: StyleSheet.create({
        body: {
            flexDirection: "column",
            padding: 30,
            flex: 1
        },
        column: {
            flexDirection: "column"
        },
         row: {
            flexDirection: "row"
        }
    }),
    Text: StyleSheet.create({
    })
};

export {Global};
export {Typography};
export {Buttons};
export {Utilities};

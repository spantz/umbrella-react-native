"use strict";
// @flow

import {
    StyleSheet
} from "react-native";

import Typography from "./typography.js";
import Buttons from "./buttons.js";
import Utilities from "./utilities.js";
import Colors from "./colors";

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
        container: {
            padding: 20,
            flex: 1
        }
    }),
    Text: StyleSheet.create({

    }),
    Grid: StyleSheet.create({
        column: {
            flexDirection: "column",
            flex: 1
        },
        row: {
            flexDirection: "row",
            flex: 1
        },
        justifyCenter: {
            justifyContent: "center"
        },
        justifyEnd: {
            justifyContent: "flex-end"
        }
    })
};

export type Style = StyleSheet | Object | number | Array<StyleSheet | Object | number>;
export {Global};
export {Typography};
export {Buttons};
export {Utilities};
export {Colors};

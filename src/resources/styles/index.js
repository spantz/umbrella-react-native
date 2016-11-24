"use strict";
// @flow

import {
    StyleSheet
} from "react-native";

export default {
    Image: StyleSheet.create({
        background: {
            flex: 1
        }
    }),
    View: StyleSheet.create({
        body: {
            margin: 20,
            zIndex: 1
            // backgroundColor: "#44B4EF"
        },
        background: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
        }
    }),
    Text: StyleSheet.create({
        base: {
            fontFamily: "Montserrat-Bold",
            color: "#FFF"
        }
    })
}
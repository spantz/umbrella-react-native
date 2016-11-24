"use strict";
// @flow

import {
    StyleSheet
} from "react-native";

import { base } from "./typography";

export default {
    primary: StyleSheet.create({
        view: {
            borderWidth: 1,
            borderColor: "#2E8DD6",
            borderRadius: 8,
            overflow: "hidden",
            shadowColor: "#FFFFFF",
            shadowRadius: 9
        },
        text: StyleSheet.flatten([
            base,
            {
                fontSize: 18,
                padding: 20,
                backgroundColor: "#FFFFFF",
                color: "#2E8DD6",
                textAlign: "center"
            }
        ])
    })
};
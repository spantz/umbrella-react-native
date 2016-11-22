"use strict";
// @flow

import {StyleSheet} from "react-native";
import Colors from "./colors";

export default {
    colors: StyleSheet.create({
        screen: {
            backgroundColor: Colors.background
        }
    }),
    font: StyleSheet.create({

    }),
    text: StyleSheet.create({
        hero: {
            fontFamily: "Montserrat-Bold",
            fontSize: 28,
            fontWeight: "bold",
            color: Colors.white
        },
        subHero: {
            fontFamily: "Montserrat-Bold",
            fontSize: 18,
            fontWeight: "200",
            color: Colors.white
        },
        button: {
            fontFamily: "Montserrat-Bold",
            fontSize: 16,
            fontWeight: "600",
            padding: 2,
            color: Colors.background
        }
    }),
    layout: StyleSheet.create({
        root: {
            marginTop: 20
        }
    })
};

"use strict";
// @flow

import {
    Dimensions
} from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;

function getWidth(percentage) {
    return WINDOW_WIDTH * (percentage / 100);
}

export default {
    WINDOW_WIDTH: WINDOW_WIDTH,
    WIDTH_80_PERCENT: getWidth(80),
    WIDTH_50_PERCENT: getWidth(50),
    getWidth: getWidth
};
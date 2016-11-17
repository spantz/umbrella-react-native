"use strict";
// @flow

import React from "react";
import Swiper from "react-native-swiper";
import GlobalStyles from "../../resources/styles/global";
import ActivityIntroScrollerScreen from "../screens/ActivityIntroScrollerScreen";
import {
    View,
    Text
} from "react-native";

export default class ActivityIntroScene extends React.Component {
	render() {
		return (
            <Swiper showsPagination={true} loop={false} style={[GlobalStyles.layout.root]}>
                <View>
                    <Text>Hey!</Text>
                </View>
                <ActivityIntroScrollerScreen/>
                <View>
                    <Text>Third Screen</Text>
                </View>
            </Swiper>
		);
	}
}
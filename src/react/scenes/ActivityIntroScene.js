"use strict";
// @flow

import React from "react";
import Swiper from "react-native-swiper";
import GlobalStyles from "../../resources/styles/global";
import ActivityIntroScrollerScreen from "../screens/ActivityIntroScrollerScreen";
import ActivityHomeScene from "./ActivityHomeScene";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Button from "../components/Button";

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        alignSelf: "flex-start",
        flex: 2
    },
    flexOne: {
        flex: 1
    },
    button: {
        marginBottom: 50,
        flex: 6
    },
    letsGoText: {
        alignSelf: "flex-start",
        flex: 6
    }
});

export default class ActivityIntroScene extends React.Component {
    constructor(props) {
        super(props);
        this.toActivityHome = this.toActivityHome.bind(this);
    }

    toActivityHome() {
        this.props.navigator.push({
            index: 0,
            component: ActivityHomeScene,
            reset: true
        });
    }

	render() {
		return (
            <Swiper showsPagination={true} loop={false} style={[GlobalStyles.layout.root]}>
                <View>
                    <Text style={GlobalStyles.text.hero}>Hey!</Text>
                </View>
                <ActivityIntroScrollerScreen/>
                <View style={styles.flexOne}>
                    <Text style={[GlobalStyles.text.hero, styles.letsGoText]}>Sounds pretty cool, right?</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.flexOne}/>
                        <Button
                            text="Let's Take a Look"
                            onPress={this.toActivityHome}
                            style={styles.button}/>
                        <View style={styles.flexOne}/>
                    </View>
                </View>
            </Swiper>
		);
	}
}
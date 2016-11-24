"use strict";
// @flow

import React from "react";
import Swiper from "react-native-swiper";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    LayoutAnimation,
    Image,
    ScrollView
} from "react-native";

import InfoScreen from "../screens/InfoScreen";
import ActivityHomeScene from "./ActivityHomeScene";
import Card from "../components/Card";


import { sun, hill } from "../../resources/images";

const breatheScreenshot = require("../../resources/img/breathe-screenshot.png");
const moodScreenshot = require("../../resources/img/mood-screenshot.png");

const animation = {
    sun: {
        top: new Animated.Value(400),
        left: new Animated.Value(-200),
    },
    hill: {
        opacity: new Animated.Value(0),
    }
};

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        alignItems: "center"
    },
    sun: {
        position: "absolute",
        width: 157,
        height: 157,

    },
    hill: {
        position: "absolute",
        right: 0,
        top: 398,
        width: 750/2,
        height: 538/2
    },
    image: {
        alignSelf: "stretch",
        flex: 1,
        width: null,
        height: null
    },
    cardHero: {
        textAlign: "center",
        color: "#000"
    },
    cardSubHero: {
        textAlign: "center",
        color: "#888",
        fontSize: 14
    }
});

export default class InfoScene extends React.Component {
    swiper: Swiper;

    constructor(props) {
        super(props);

        this.animateInSun = this.animateInSun.bind(this);
        this.goForward = this.goForward.bind(this);
        this.onSwiperMount = this.onSwiperMount.bind(this);
        this.goToActivityIntro = this.goToActivityIntro.bind(this);
    }

    goForward() {
        this.swiper.scrollBy(1);
    }

    onSwiperMount(swiper: Swiper) {
        this.swiper = swiper;
    }

    goToActivityIntro() {
        this.props.navigator.push({
            index: 1,
            component: ActivityHomeScene,
            reset: true
        });
    }

    animateInSun() {
        return Animated.sequence([
            Animated.delay(1000),
            Animated.parallel([
                Animated.spring(animation.sun.top, { toValue: 298 }),
                Animated.spring(animation.sun.left, { toValue: 106 })
            ])
        ]);
    }

    componentDidMount() {
        this.animateInSun().start();
    }

    render() {

        return (
            <Swiper showsPagination={true} loop={false} ref={this.onSwiperMount} style={[]}>
                <View style={[styles.flex]}>
                    <Animated.Image source={sun} style={[styles.sun, animation.sun]}/>
                    <Animated.Image source={hill} style={[styles.hill]}/>
                    <InfoScreen style={[styles.flex]}
                        hero="Use us in the moment when you're having a bad day."
                        subHero="We'll help you relax and calm down when you're struggling."
                        onPress={this.goForward}
                        buttonText="Great"
                        />
                </View>
                <InfoScreen
                    hero="We've got lots of activities to help you out."
                    onPress={this.goForward}
                    buttonText="Continue"
                    style={styles.flex}
                    >
                    <ScrollView
                        directionalLockEnabled={true}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false} >
                        <Card>
                            <Image source={breatheScreenshot} resizeMode={"contain"} style={[]}/>
                        </Card>
                        <Card>
                            <Image source={moodScreenshot} style={styles.image}/>
                        </Card>
                        <Card>
                            <Text style={[]}>More Coming Soon</Text>
                            <Text style={[]}>Early 2017</Text>
                        </Card>
                    </ScrollView>
                </InfoScreen>
                <InfoScreen style={[]}
                    hero="Use us every day to build a brighter future."
                    subHero="Check in with us to view long-term goals, progress, and work towards a happier you."
                    buttonText="Show Me How"
                    onPress={this.goToActivityIntro}
                    />
            </Swiper>
        );
    }
}

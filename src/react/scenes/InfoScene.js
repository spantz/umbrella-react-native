"use strict";
// @flow

import React from "react";
import Swiper from "react-native-swiper";
import {
    StyleSheet,
    Animated,
    Image,
    ScrollView
} from "react-native";
import AnimationFactory from "../../resources/factories/animations";
import {sun, hill, cards} from "../../resources/images";

import InfoScreen from "../screens/InfoScreen";
import ActivityHomeScene from "./ActivityHomeScene";

import {Card} from "../components";

import realm from "./../../storage";

const animations = {
    sun: new AnimationFactory({bottom: [-300, -200], left: [-200, 105]}),
    hill: new AnimationFactory({opacity: [0, 1]})
};

const styles = StyleSheet.create({
    sun: {
        position: "absolute"
    },
    hill: {
        position: "absolute",
        top: 150,
        right: 0
    },
    hero: {
        marginTop: 30,
        paddingBottom: 0,
        marginBottom: 0
    }
});

export default class InfoScene extends React.Component {
    swiper: Swiper;

    constructor(props) {
        super(props);

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
        realm.write(() => {
            realm.create("User", {id: 1, completedIntro: true}, true);
        });
        this.props.navigator.push({
            index: 1,
            component: ActivityHomeScene,
            reset: true
        });
    }

    componentDidMount() {
        Animated.sequence([
            animations.hill.getSequence(),
            animations.sun.getParallel()
        ]).start();
    }

    render() {

        return (
            <Swiper showsPagination={false} loop={false} ref={this.onSwiperMount}>
                <InfoScreen
                    heroStyle={styles.hero}
                    hero="Umbrella is here to help you reduce your anxiety, feel better about yourself, and have a brighter day."
                    buttonText="Sounds Cool"
                    onPress={this.goForward}
                    >
                    <Animated.Image source={sun} style={[styles.sun, animations.sun.getStyles()]}/>
                    <Animated.Image source={hill} style={[styles.hill, animations.hill.getStyles()]}/>
                </InfoScreen>
                <InfoScreen
                    heroStyle={styles.hero}
                    hero="We've got lots of activities to help you out."
                    buttonText="Awesome, let's get started"
                    onPress={this.goToActivityIntro}>
                    <ScrollView
                        directionalLockEnabled={true}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}>
                        <Card>
                            <Image source={cards.breathe}/>
                        </Card>
                        <Card>
                            <Image source={cards.mood}/>
                        </Card>
                        <Card>
                            <Image source={cards.blank}/>
                        </Card>
                    </ScrollView>
                </InfoScreen>
            </Swiper>
        );
    }
}

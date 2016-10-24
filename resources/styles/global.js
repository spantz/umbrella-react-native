'use strict';
// @flow

import {StyleSheet} from 'react-native';

export default {
    colors: StyleSheet.create({
        screen: {
            backgroundColor: '#2E8DD6'
        }
    }),
    font: StyleSheet.create({

    }),
    text: StyleSheet.create({
        hero: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#fff'
        },
        subHero: {
            fontSize: 18,
            fontWeight: "200",
            color: '#fff'
        },
        button: {
            fontSize: 16,
            fontWeight: "600",
            padding: 2,
            color: '#2E8DD6'
        }
    }),
    layout: {
        root: {
            marginTop: 20
        }
    }
};
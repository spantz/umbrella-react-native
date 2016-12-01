import {
    StyleSheet,
    Animated
} from "react-native";




/**
 * AnimationFactory makes it easy to specify a StyleSheet-compatable
 * property along with a start and end value. It creates animations 
 * and exposes triggers, which are animations of those properties.
 * Example:
 * 
 * let fadeIn = new AnimationFactory({opacity: [0,1]});
 * 
 * function triggerFadeIn (){
 *   fadeIn.parallel.start();
 * }
 * 
 * @class AnimationFactory
 */
class AnimationFactory {
    constructor(properties) {
        this.keys = Object.keys(properties);
        this.styles = {};
        this.triggers = [];

        this.keys.forEach((key) => {
            const start = properties[key][0] || 0;
            const end = properties[key][1] || 0;
            Object.assign(this.styles, this.createStartStyleForProperty(key, start));
            this.triggers.push(this.createAnimationTrigger(key, end));
        });

        this.parallel = Animated.parallel(this.triggers);
        this.sequence = Animated.sequence(this.triggers);
    }

    createAnimationTrigger(key, value) {
        return Animated.spring(this.styles[key], { toValue: value });
    }

    createStartStyleForProperty(key, value) {
        var startStyle = {};
        startStyle[key] = new Animated.Value(value);
        return startStyle;
    }
}

export default AnimationFactory;

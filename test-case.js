"use strict";

beforeAll(() => {
    console.error = function (message) {
        throw new Error(message);
    };
});

export default class TestCase {
    static getRenderedProps(component) {
        return component._component._instance.props.props;
    }
}
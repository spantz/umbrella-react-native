import "react-native";
import React from "react";
import Button from "../../src/react/components/Button";
import "../../test-case";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("fails without required props", function () {
    expect(() => {
        renderer.create(<Button text="Hello"/>);
    }).toThrowError(/Required prop `onPress` was not specified/);

    expect(() => {
        renderer.create(<Button onPress={() => {}}/>);
    }).toThrowError(/Required prop `text` was not specified/);
});

it("renders correctly", function () {
    expect(renderer.create((
        <Button
            onPress={() => {}}
            text="Hello"
            />
    )));
});
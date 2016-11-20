import "react-native";
import React from "react";
import Card from "../../src/react/components/Card";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", function () {
    renderer.create(<Card />);
});
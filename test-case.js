"use strict";

beforeAll(() => {
    console.error = function (message) {
        throw new Error(message);
    };
});
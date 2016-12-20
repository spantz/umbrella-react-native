"use strict";

import {Types} from "realm";

class UserSchema {
    hasCompletedIntroFlow() {
        return this.completedIntro;
    }
}

UserSchema.schema = {
    name: "User",
    primaryKey: "id",
    properties: {
        id: Types.INT,
        firstName: {type: Types.STRING, optional: true},
        lastName: {type: Types.STRING, optional: true},
        completedIntro: Types.BOOL
    }
};

export default UserSchema;
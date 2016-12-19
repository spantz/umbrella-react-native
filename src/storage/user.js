"use strict";

import Realm from "realm";

class User {
    hasCompletedIntroFlow() {
        return this.completedIntro;
    }

    schema: {
        name: "User",
        primaryKey: 'id',
        properties: {
            id: 'int',
            firstName: {type: "string", optional: true},
            lastName: {type: "string", optional: true},
            completedIntro: "bool"
        }
    }
}

export default new Realm({schema: [User]});
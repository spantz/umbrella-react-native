"use strict";

import UserSchema from "./schema/user";
import Realm from "realm";

export default new Realm({schema: [UserSchema]});
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SecuuthJwt_1 = __importDefault(require("./SecuuthJwt"));
class SecuuthIdToken extends SecuuthJwt_1.default {
    constructor(token) {
        super(token);
    }
    decodePayload() {
        var obj = super.decodePayload();
        return obj;
    }
    getAuthTime() {
        return this.payload.auth_time;
    }
    getSignInMode() {
        return this.payload.signInMode;
    }
    getTyp() {
        return this.payload.typ;
    }
    getUserId() {
        return this.payload.userId;
    }
}
exports.default = SecuuthIdToken;

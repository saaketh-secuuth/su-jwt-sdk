"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
class SecuuthJwt {
    constructor(token) {
        this.token = token;
        this.payload = this.decodePayload();
    }
    decodePayload() {
        const payload = this.token.split(".")[1];
        try {
            var obj = JSON.parse(buffer_1.Buffer.from(payload, "base64").toString("utf8"));
            return obj;
        }
        catch (err) {
            return {};
        }
    }
    getExpiration() {
        var payload = this.payload;
        return payload.exp;
    }
    getIssuedAt() {
        var payload = this.payload;
        return payload.iat;
    }
    getIssuer() {
        var payload = this.payload;
        return payload.iss;
    }
    getAudience() {
        var payload = this.payload;
        return payload.aud;
    }
    getSubId() {
        var payload = this.payload;
        return payload.sub;
    }
}
exports.default = SecuuthJwt;

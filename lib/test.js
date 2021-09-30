"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SecuuthAccessToken_1 = __importDefault(require("./SecuuthAccessToken"));
const SecuuthIdToken_1 = __importDefault(require("./SecuuthIdToken"));
async function validateAccessToken() {
    var decoded = await new SecuuthAccessToken_1.default("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c24iOiIxSlQxOENTMDE1In0.TET-AbEgiaEtU1g4_ChDDfbKwEjj_tVL0jGo8Go5Sa4");
    console.log(decoded.decodePayload());
    return decoded;
}
async function validateIdToken() {
    var decoded = await new SecuuthIdToken_1.default("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c24iOiIxSlQxOENTMDE1In0.TET-AbEgiaEtU1g4_ChDDfbKwEjj_tVL0jGo8Go5Sa4");
    console.log(decoded);
    return decoded;
}
validateAccessToken();
validateIdToken();

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const jwk_to_pem_1 = __importDefault(require("jwk-to-pem"));
const jsonwebtoken = __importStar(require("jsonwebtoken"));
const fs = __importStar(require("fs"));
const JWKSURL = "http://localhost:5000/tokens/jwks";
const keyId = "SecuuthJWTPublicKey";
const keyAlgo = "ES256";
let cacheKeys;
const getKeys = async () => {
    if (!cacheKeys) {
        const url = JWKSURL;
        const publicKeys = await axios_1.default.get(url);
        cacheKeys = publicKeys.data.keys.reduce((agg, current) => {
            const pem = (0, jwk_to_pem_1.default)(current);
            agg[current.kid] = { instance: current, pem };
            return agg;
        }, {});
        return cacheKeys;
    }
    else {
        return cacheKeys;
    }
};
const SecuuthValidateJWT = async (token) => {
    // const pubKey = fs.readFileSync('./../public.key', 'utf8');
    const keySet = await getKeys();
    const pubKey = keySet[keyId];
    let errResp;
    jsonwebtoken.verify(token, pubKey.pem, { algorithms: [keyAlgo] }, function (err) {
        errResp = err;
    });
    if (errResp) {
        console.log("Token provided is Invalid: " + JSON.stringify(errResp));
        return false;
    }
    return true;
};
async function createToken() {
    console.log("Creating token...");
    var privateKEY = fs.readFileSync('./../private.key', 'utf8');
    const token = jsonwebtoken.sign({ sub: "123456" }, privateKEY, { algorithm: 'ES256' });
    console.log("Token: " + token);
    return token;
}
async function testToken() {
    const token = await createToken();
    console.log(await SecuuthValidateJWT(token));
}
// testToken()
exports.default = SecuuthValidateJWT;

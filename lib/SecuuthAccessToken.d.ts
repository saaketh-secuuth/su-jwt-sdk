import BaseClaims from "./SecuuthJwt";
import SecuuthJWT from "./SecuuthJwt";
export interface SecuuthAccessTokenInterface extends BaseClaims {
    signInMode: string;
    scope: string;
    userId: string;
    typ: string;
}
export default class SecuuthAccessToken extends SecuuthJWT {
    payload: SecuuthAccessTokenInterface;
    constructor(token: string);
    decodePayload(): SecuuthAccessTokenInterface;
    getScope(): string;
    getSignInMode(): string;
    getTyp(): string;
    getUserId(): string;
}

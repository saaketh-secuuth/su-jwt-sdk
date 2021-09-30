import BaseClaims from "./SecuuthJwt";
import SecuuthJWT from "./SecuuthJwt";
export interface SecuuthIdTokenInterface extends BaseClaims {
    signInMode: string;
    auth_time: string;
    userId: string;
    typ: string;
}
export default class SecuuthIdToken extends SecuuthJWT {
    payload: SecuuthIdTokenInterface;
    constructor(token: string);
    decodePayload(): SecuuthIdTokenInterface;
    getAuthTime(): string;
    getSignInMode(): string;
    getTyp(): string;
    getUserId(): string;
}

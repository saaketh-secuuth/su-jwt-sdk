export interface BaseClaims {
    aud: string;
    exp: number;
    iat: number;
    iss: string;
    sub: string;
    jti: string;
}
declare class SecuuthJwt {
    token: string;
    payload: Object;
    constructor(token: string);
    decodePayload(): Object;
    getExpiration(): number;
    getIssuedAt(): number;
    getIssuer(): string;
    getAudience(): string;
    getSubId(): string;
}
export default SecuuthJwt;

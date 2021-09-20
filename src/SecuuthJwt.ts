import { Buffer } from "buffer";

export interface BaseClaims {
    aud: string;
    exp: number;
    iat: number;
    iss: string;
    sub: string;
    jti: string;
  }

class SecuuthJwt {
  token: string;
  payload: Object;
  constructor(token: string) {
    this.token = token;
    this.payload = this.decodePayload();
  }

  decodePayload(): Object {
    const payload = this.token.split(".")[1];
    try {
      var obj = JSON.parse(Buffer.from(payload, "base64").toString("utf8"));
      return obj;
    } catch (err) {
      return {};
    }
  }

  getExpiration(): number {
    var payload = <BaseClaims>this.payload;
    return payload.exp;
  }

  getIssuedAt(): number {
    var payload = <BaseClaims>this.payload;
    return payload.iat;
  }

  getIssuer(): string {
    var payload = <BaseClaims>this.payload;
    return payload.iss;
  }

  getAudience(): string {
    var payload = <BaseClaims>this.payload;
    return payload.aud;
  }

  getSubId(): string {
    var payload = <BaseClaims>this.payload;
    return payload.sub;
  }
}

export default SecuuthJwt;



import BaseClaims from "./SecuuthJwt";
import SecuuthJWT from "./SecuuthJwt";

export interface SecuuthAccessTokenInterface extends BaseClaims {
  signInMode: string;
  scope: string;
  userId: string;
  typ: string;
}

export default class SecuuthAccessToken extends SecuuthJWT {
  payload!: SecuuthAccessTokenInterface;

  constructor(token: string) {
    super(token);
  }

  decodePayload(): SecuuthAccessTokenInterface {
    var obj = super.decodePayload();
    return <SecuuthAccessTokenInterface>obj;
  }

  getScope(): string {
    return this.payload.scope;
  }

  getSignInMode(): string {
    return this.payload.signInMode;
  }

  getTyp(): string {
    return this.payload.typ;
  }

  getUserId(): string {
    return this.payload.userId;
  }
}

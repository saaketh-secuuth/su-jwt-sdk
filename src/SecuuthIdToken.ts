import BaseClaims from "./SecuuthJwt";
import SecuuthJWT from "./SecuuthJwt";

export interface SecuuthIdTokenInterface extends BaseClaims {
  signInMode: string;
  auth_time: string;
  userId: string;
  typ: string;
}

export default class SecuuthIdToken extends SecuuthJWT {
  payload!: SecuuthIdTokenInterface;

  constructor(token: string) {
    super(token);
  }

  decodePayload(): SecuuthIdTokenInterface {
    var obj = super.decodePayload();
    return <SecuuthIdTokenInterface>obj;
  }

  getAuthTime(): string {
    return this.payload.auth_time;
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

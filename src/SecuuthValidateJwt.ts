import axios from "axios";
import jwkToPem from "jwk-to-pem";
import * as jsonwebtoken from "jsonwebtoken";
import jwkToBuffer from "jwk-to-pem";
import * as fs from "fs";

const JWKSURL = "http://localhost:5000/tokens/jwks";
const keyId = "SecuuthJWTPublicKey";
const keyAlgo = "ES256";

interface PublicKey extends jwkToBuffer.ECPrivate {
  kid: string;
  use: string;
  alg: string;
  crv: string;
  x: string;
  y: string;
}

interface PublicKeys {
  keys: PublicKey[];
}

interface PublicKeyMeta {
  instance: PublicKey;
  pem: string;
}

interface MapOfKidToPublicKey {
  [key: string]: PublicKeyMeta;
}

let cacheKeys: MapOfKidToPublicKey | undefined;
const getKeys = async (
): Promise<MapOfKidToPublicKey> => {
  if (!cacheKeys) {
    const url = JWKSURL;
    const publicKeys = await axios.get<PublicKeys>(url);
    cacheKeys = publicKeys.data.keys.reduce((agg, current) => {
      const pem = jwkToPem(current);
      agg[current.kid] = { instance: current, pem };
      return agg;
    }, {} as MapOfKidToPublicKey);
    return cacheKeys;
  } else {
    return cacheKeys;
  }
};

const SecuuthValidateJWT = async (token: string): Promise<boolean> => {
  // const pubKey = fs.readFileSync('./../public.key', 'utf8');
  const keySet = await getKeys();
  const pubKey = keySet[keyId];
  let errResp: any | undefined;
  jsonwebtoken.verify(token, pubKey.pem, { algorithms: [keyAlgo] }, function (
    err: any
  ) {
    errResp = err;
  });

  if (errResp) {
    console.log("Token provided is Invalid: " + JSON.stringify(errResp));
    return false;
  }
  return true;
};


async function createToken() {
    console.log("Creating token...")

    var privateKEY  = fs.readFileSync('./../private.key', 'utf8');
    const token = jsonwebtoken.sign({ sub: "123456" }, privateKEY, { algorithm: 'ES256'});
    console.log("Token: " + token)
    return token;
}


async function testToken() {
  const token = await createToken();
  console.log(await SecuuthValidateJWT(token))
}

// testToken()

export default SecuuthValidateJWT;
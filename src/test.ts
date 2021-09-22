import SecuuthAccessToken from "./SecuuthAccessToken";
import SecuuthIdToken from "./SecuuthIdToken";

async function validateAccessToken() {
  var decoded = await new SecuuthAccessToken(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c24iOiIxSlQxOENTMDE1In0.TET-AbEgiaEtU1g4_ChDDfbKwEjj_tVL0jGo8Go5Sa4"
  );
  console.log(decoded.decodePayload());
  return decoded;
}

async function validateIdToken() {
  var decoded = await new SecuuthIdToken(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c24iOiIxSlQxOENTMDE1In0.TET-AbEgiaEtU1g4_ChDDfbKwEjj_tVL0jGo8Go5Sa4"
  );
  console.log(decoded);
  return decoded;
}

validateAccessToken();
validateIdToken();

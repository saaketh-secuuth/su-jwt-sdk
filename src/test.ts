import SecuuthAccessToken from "./SecuuthAccessToken";
import SecuuthIdToken from "./SecuuthIdToken";

async function validateAccessToken() {
    var decoded = await new SecuuthAccessToken("eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTYiLCJpYXQiOjE2MzEyNjkzMDh9.FsGiiuVdT2TUNoLxdEir-Bn0xxVvVVrN7JtgWpXCm6VZeGEwq7ZQkboF74q9L7VrkSjtjSY1VOZEDTff_8wHSA");
    console.log(decoded);
    return decoded;
}

async function validateIdToken() {
    var decoded = await new SecuuthIdToken("eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTYiLCJpYXQiOjE2MzEyNjkzMDh9.FsGiiuVdT2TUNoLxdEir-Bn0xxVvVVrN7JtgWpXCm6VZeGEwq7ZQkboF74q9L7VrkSjtjSY1VOZEDTff_8wHSA");
    console.log(decoded);
    return decoded;
}

validateAccessToken();
validateIdToken();


require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtsClient = require("jwks-rsa");

const client = jwtsClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (error, key) {
    const signKey = key.publicKey || key.rsaPublicKey;
    callback(null, signKey);
  });
}

async function isTokenValid(token) {
  if (token) {
    const bearerToken = token.split(" ");

    const result = new Promise((resolve, reject) => {
      jwt.verify(
        bearerToken[1],
        getKey,
        {
          audience: process.env.API_IDENTIFIER,
          issuer: `https://${process.env.AUTH0_DOMAIN}`,
          algorithms: ["RS256"],
        },
        (error, decode) => {
          if (error) {
            resolve({ error });
          }
          if (decoded) {
            resolve({ decoded });
          }
        }
      );
    });
    return result;
  }
  return { error: "No token Provided" };
}

module.exports = isTokenValid;

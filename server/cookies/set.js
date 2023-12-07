const { encodeCookie } = require("./jwt");
const { serverSideCookieOptions } = require("./options");

const setServerSideCookie = (response, name, value, isEncrypted = false) => {
  if (isEncrypted) {
    // if it needs to be encrypted, encode it
    const encodedCookie = encodeCookie(value);
    console.log(encodedCookie);
    response.cookie(name, encodedCookie, serverSideCookieOptions());
  } else {
    response.cookie(name, value, serverSideCookieOptions());
  }
};

const setClientSideCookie = (response, name, value, isEncrypted = false) => {
  if (isEncrypted) {
    // if it needs to be encrypted, encode it
    const encodedCookie = encodeCookie(value);
    response.cookie(name, encodedCookie, clientSideCookieOptions());
  } else {
    response.cookie(name, value, clientSideCookieOptions());
  }
};

module.exports = { setServerSideCookie, setClientSideCookie };

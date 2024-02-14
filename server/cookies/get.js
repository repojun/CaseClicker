
const { decodeCookie } = require("./jwt")

const getCookie = (cookies, name, isEncrypted = false) => {
  const cookie = cookies[name];
  if (!cookie) { // if there isnt a cookie
    return null;
  }

  if (isEncrypted) { // if its encrypted decode it
    const decodedCookie = decodeCookie(cookie);
    return decodedCookie
  }

  return cookie; // if its not encrypted, then return it
}


module.exports = { getCookie };
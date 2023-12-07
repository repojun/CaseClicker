const serverSideCookieOptions = (options) => {
  // Update cookies on user's device
  return {
    expires: new Date(Date.now() + 2592000000),
    maxAge: 2592000000,
    secure: false,
    httpOnly: true,
    domain: "localhost",
    sameSite: "lax",
    ...options, // options is being passed as an object to update and add parameters
  };
};

const clientSideCookieOptions = (options) => {
  // These cookies can be accessed in react (httpOnly)
  return {
    expires: new Date(Date.now() + 2592000000),
    maxAge: 2592000000,
    secure: false,
    httpOnly: false,
    domain: "localhost",
    sameSite: "lax",
    ...options, // options is being passed as an object to update and add parameters
  };
};

module.exports = { clientSideCookieOptions, serverSideCookieOptions };

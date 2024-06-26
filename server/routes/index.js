const registerRoutes = require("./register");
const loginRoutes = require("./login");
const mainpageRoutes = require("./mainpage");
const userRoutes = require("./user");
const messageRoutes = require("./messages")

async function initialiseRoutes(app) {
  app.use("/api/register", registerRoutes); // any routes in register file are prefixed with /register
  app.use("/api/login", loginRoutes);
  app.use("/api/mainpage", mainpageRoutes);
  app.use("/api/user", userRoutes);
  app.use("/api/messages", messageRoutes);
}

module.exports = initialiseRoutes;

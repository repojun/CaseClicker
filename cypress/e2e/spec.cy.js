const generateRandomString = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

describe("User Register", () => {
  const profilePictures = ["https://arjun.needs-to-s.top/8L73gqw.png", "https://arjun.needs-to-s.top/3TERGwu.png", "https://arjun.needs-to-s.top/7aZX2oJ.png", "https://arjun.needs-to-s.top/23JLVwu.png", "https://arjun.needs-to-s.top/6YGmTHd.png", "https://arjun.needs-to-s.top/4UN8sXF.png"];
  for (let i = 0; i < 6; i++) {
    const randomUsername = `user_${generateRandomString(8)}`;
    const randomEmail = `${randomUsername}@example.com`;
    const password = generateRandomString(12);
    const isLastIteration = i === 5;
    it(`should register a new user and login ${i + 1} time(s) then their name should be displayed`, () => {
      cy.viewport(1920, 1080);

      cy.visit("localhost:3000/register");

      // Fill in register form
      cy.get('input[data-testid="cypress-register-email"]').type(randomEmail);
      cy.get('input[data-testid="cypress-register-username"]').type(randomUsername);
      cy.get('input[data-testid="cypress-register-password"]').type(password);
      cy.get('[data-testid="cypress-register-button"]').click();

      cy.url().should("include", "/login");
      cy.contains("Login").should("be.visible");

      // Checking that you cant register again
      cy.get('[data-testid="cypress-login-signup-button"]').click();
      cy.url().should("include", "/register");
      cy.contains("Register").should("be.visible");

      cy.get('input[data-testid="cypress-register-email"]').type(randomEmail);
      cy.get('input[data-testid="cypress-register-username"]').type(randomUsername);
      cy.get('input[data-testid="cypress-register-password"]').type(password);
      cy.get('[data-testid="cypress-register-button"]').click();

      cy.request({
        method: "POST",
        url: "http://localhost:5000/api/register",
        body: {
          email: randomEmail,
          username: randomUsername,
          password: password,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(400);
      });

      cy.contains("User already exists").should("be.visible");

      // Going back to sign in form and inputting incorrect details
      cy.get('[data-testid="cypress-register-signin-button').click();
      cy.url().should("include", "/login");
      cy.contains("Login").should("be.visible");

      cy.get('input[data-testid="cypress-login-username"]').type(randomUsername);
      cy.get('input[data-testid="cypress-login-password"]').type("hello");
      cy.get('[data-testid="cypress-login-button"]').click();

      cy.contains("Password is incorrect").should("be.visible");

      cy.get('input[data-testid="cypress-login-username"]').clear();
      cy.get('input[data-testid="cypress-login-password"]').clear();

      // Going back to sign in and inputting correct details
      cy.get('input[data-testid="cypress-login-username"]').type(randomUsername);
      cy.get('input[data-testid="cypress-login-password"]').type(password);
      cy.get('[data-testid="cypress-login-button"]').click();

      // User is welcomed with their username
      cy.url().should("include", "/profile");
      cy.contains(randomUsername);

      cy.get('[data-testid="cypress-main-mainpage"]').click();
      cy.contains("Balance").should("be.visible");
      cy.get('[data-testid="cypress-game-click"]').click();
      cy.contains("$").should("be.visible");

      cy.get('[data-testid="cypress-main-profile"]').click();
      cy.get('[data-testid="cypress-profile-picture"]').click();
      cy.get('[data-testid="cypress-profile-input"]').click();
      cy.get('[data-testid="cypress-profile-input"]').type(profilePictures[i]);
      cy.get('[data-testid="cypress-profile-confirm"]').click();



      cy.get('[data-testid="cypress-main-inventory"]').click();
      cy.get('[data-testid="cypress-main-store"]').click();
      cy.get('[data-testid="cypress-store-button"]').each(($button, index) => {
        cy.wrap($button).click({ multiple: true });
        cy.get('[data-testid="cypress-store-purchase"]').click({ multiple: true });
        cy.contains("Insufficient Funds!").should("be.visible");
      });

      cy.get('[data-testid="cypress-main-messageboard"]').click();
      cy.get('[data-testid="cypress-messageboard-input"]').type("Hello all! My password is " + password);
      cy.get('[data-testid="cypress-messageboard-post"]').click();
      cy.contains("Hello all! My password is " + password).should("be.visible");

      if (isLastIteration) {
        cy.get('[data-testid="cypress-main-mainpage"]').click();
        cy.contains("Balance").should("be.visible");
        for (let i = 0; i < 10; i++) {
          cy.get('[data-testid="cypress-game-click"]').click();
        }
        cy.contains("$").should("be.visible");
        cy.get('[data-testid="cypress-main-leaderboard"]').click();
        cy.contains("Leaderboard").should("be.visible");
      }
    });
  }
});

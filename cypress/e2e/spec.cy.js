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
  const randomUsername = `user_${generateRandomString(8)}`;
  const randomEmail = `${randomUsername}@example.com`;
  const password = "TestUserPassword";

  it("should register a new user and login then their name should be displayed", () => {
    cy.visit("localhost:3000/register");

    // fill in register form
    cy.get('input[data-testid="cypress-register-email"]').type(randomEmail);
    cy.get('input[data-testid="cypress-register-username"]').type(randomUsername);
    cy.get('input[data-testid="cypress-register-password"]').type(password);
    cy.get('[data-testid="cypress-register-button"]').click();

    cy.url().should("include", "/login");
    cy.contains("Login").should("be.visible");

    cy.get('input[data-testid="cypress-login-username"]').type(randomUsername);
    cy.get('input[data-testid="cypress-login-password"]').type(password);
    cy.get('[data-testid="cypress-login-button"]').click();
  
    cy.url().should("include", "/dashboard");
    cy.contains("Welcome back " + randomUsername)
  });
});

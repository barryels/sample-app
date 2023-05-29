describe("Testing Cypress setup and config", () => {
  it("The correct heading displays", () => {
    cy.visit("/");
    cy.findByRole("heading", { name: "Foodie" }).should("be.visible");
  });

  it("User can view the login form and navigate back to home", () => {
    cy.visit("/");
    cy.findByRole("link", { name: "Login" }).click();
    cy.findByRole("heading", { name: "Login" }).should("be.visible");

    cy.findByRole("link", { name: "Home" }).click();
    cy.findByRole("heading", { name: "Foodie" }).should("be.visible");
  });
});

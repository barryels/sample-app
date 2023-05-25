describe("Testing Cypress setup and config", () => {
  it("The correct heading displays", () => {
    cy.visit("/");
    cy.findByRole("heading", { name: "Foodie" }).should("be.visible");
  });

  it("User can view the login form", () => {
    cy.visit("/");
    cy.findByRole("link", { name: "Login" }).click();
    cy.findByRole("heading", { name: "Login" }).should("be.visible");
  });
});

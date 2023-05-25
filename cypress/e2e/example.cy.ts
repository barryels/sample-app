describe("Testing Cypress setup and config", () => {
  it("The correct heading displays", () => {
    cy.visit("http://localhost:5173");
    cy.findByRole("heading", { name: "Foodie" }).should("be.visible");
  });
});

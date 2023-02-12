describe("Homepage", () => {
  it("passes", () => {
    cy.visit("/");

    cy.contains("hello").should("be.visible");
  });
});

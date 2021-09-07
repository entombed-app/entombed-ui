describe('Executor', () => {
  beforeEach(() => {
    cy.interceptGets()
    cy.visit("http://localhost:3000/")
  })

  it('Should be able to visit the executor page by typing in the path in the url', () => {
    cy.login()
    cy.get(".executor-pane")
      .click()
    cy.url().should("include", "http://localhost:3000/executor")
  })

  it("Should display the executor page with the default executor details", () => {
    cy.get(".executor-pane")
      .click()
    cy.get("h1")
      .contains("Elegy")
      .get(".exec-title")
      .contains("Executor")
      .get(".exec-name")
      .contains("younger bobby")
      .get("[data-cy=exec-phone]")
      .contains("888-999-1111")
      .get(".exec-email")
      .contains("bob@bee.com")
    cy.logout()
  })

})
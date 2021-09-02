describe('Executor', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/user/1", {
        ok: true,
        status: 200, 
        url: "https://elegy-backend.herokuapp.com/api/v1/user/1",
        fixture: 'user'
    })
    cy.visit("http://localhost:3000/")
  })

  it('Should be able to visit the executor page by typing in the path in the url', () => {
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
      .contains("Executor Name")
      .get("[data-cy=exec-phone]")
      .contains("(413) 555-6666")
      .get(".exec-email")
      .contains("email_address@hotmail.com")
  })

})
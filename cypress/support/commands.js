import 'cypress-file-upload'

Cypress.Commands.add("login", () => {
  cy.get("[data-cy=email]")
  .type("ex@ample.com")
  cy.get("[data-cy=password]")
  .type("password")
  cy.get(".submit-login")
  .click()
})
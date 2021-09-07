import 'cypress-file-upload'

Cypress.Commands.add("login", () => {
  cy.get("[data-cy=email]")
  .type("ex@ample.com")
  cy.get("[data-cy=password]")
  .type("password")
  cy.get(".submit-login")
  .click()
})

Cypress.Commands.add("interceptGets", () => {
  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/4", {
    ok: true,
    status: 200, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/4",
    fixture: 'user'
  }).as("getUser")

  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/4/executors", {
    ok: true,
    status: 200, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/4",
    fixture: 'executors'
  }).as("getExecutors")

  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/4/recipients", {
    ok: true,
    status: 200, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/4/recipients",
    fixture: 'recipients'
  }).as("getRecipients")

  cy.intercept("POST", 'https://elegy-backend.herokuapp.com/api/v1/login', 
  {
    ok: true,
    statusCode: 201,
    url: "https://elegy-backend.herokuapp.com/api/v1/users/2",
    body: {
      data: {
        fixture: 'user'
      }
    }
  }).as("loginPost")

})
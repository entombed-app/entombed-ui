import 'cypress-file-upload'

Cypress.Commands.add("login", () => {
  cy.get("[data-cy=email]")
  .type("ex@ample.com")
  cy.get("[data-cy=password]")
  .type("password")
  cy.get(".submit-login")
  .click()
})

Cypress.Commands.add("logout", () => {
  cy.get(".logout")
    .click()
})

Cypress.Commands.add("interceptGets", () => {
  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/**", {
    ok: true,
    statusCode: 200, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/**",
    fixture: 'user'
  }).as("getUser")

  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/**/executors", {
    ok: true,
    statusCode: 200, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/**",
    fixture: 'executors'
  }).as("getExecutors")

  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/**/recipients", {
    ok: true,
    statusCode: 200, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/**/recipients",
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

Cypress.Commands.add("interceptFails", () => {
  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/**", {
    ok: false,
    statusCode: 404, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/**",
  }).as("getUserFail")

  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/**/executors", {
    ok: false,
    statusCode: 404, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/**",
  }).as("getExecutorsFail")

  cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/**/recipients", {
    ok: false,
    statusCode: 404, 
    url: "https://elegy-backend.herokuapp.com/api/v1/users/**/recipients",
  }).as("getRecipientsFail")

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
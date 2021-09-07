//Cypress.config()

describe('Login', () => {
  beforeEach(() => {
    cy.interceptGets()
    cy.intercept("POST", 'https://elegy-backend.herokuapp.com/api/v1/users/2', 
    {
      ok: true,
      statusCode: 201,
      url: "https://elegy-backend.herokuapp.com/api/v1/users/2",
      body: {
        data: {
          fixture: 'user'
        }
      }
    })
    cy.visit("http://localhost:3000/")
  })

  it("Should display a login modal if upon visit to site", () => {
    cy.get(".modal")
      .should("be.visible")
  })

  it("Should display a welcome message, email and password inputs, and a disabled login button upon visit", () => {
    cy.get("h2")
      .contains("Welcome! Please sign in.")
      .get(".login-input")
      .should("have.length", "2")
      .get("[data-cy=email]")
      .should("have.value", "")
      .get("[data-cy=password]")
      .should("have.value", "")
      .get(".submit-login")
      .should("be.disabled")
  })

  it("Should be able to type in both inputs", () => {
    cy.get("[data-cy=email]")
      .type("email")
      .should("have.value", "email")
    cy.get("[data-cy=password]")
      .type("password")
      .should("have.value", "password")
  })

  it("Submit button should be disabled if email or password inputs are empty", () => {
    cy.get("[data-cy=email]")
      .type("email")
    cy.get(".submit-login")
      .should("be.disabled")
    cy.get("[data-cy=email]")
      .clear()
    cy.get("[data-cy=password]")
      .type("password")
    cy.get(".submit-login")
      .should("be.disabled")
  })

  it("Should enable submit button if there are characters typed in inputs", () => {
    cy.get("[data-cy=email]")
      .type("email")
    cy.get("[data-cy=password]")
      .type("password")
    cy.get(".submit-login")
      .should("be.enabled")
  })

  it("Error message should appear on modal after unsuccessful login attempt", () => {
    cy.intercept("POST", 'https://elegy-backend.herokuapp.com/api/v1/login', 
    {
      ok: false,
      statusCode: 403,
      body: {
        error: {
          statusText: "Forbidden"
        }
      }
    })
    
    cy.get("[data-cy=email]")
      .type("sherryBean")
    cy.get("[data-cy=password]")
      .type("password")
    cy.get(".submit-login")
      .click()
    cy.get(".modal-header")
      .children("h2")
      .contains("Email and password do not match. Please try again!")
  })

  it("Modal should disappear after a successful login attempt", () => {
    cy.get("[data-cy=email]")
      .type("ex@ample.com")
    cy.get("[data-cy=password]")
      .type("password")
    cy.get(".submit-login")
      .click()
    cy.get(".modal")
      .should("not.exist")
  })

  it("Should stay logged in via session storage after a successful attempt", () => {
    cy.get(".modal")
      .should("not.exist")
  })

  it("Should be able to log out once logged in", () => {
    cy.logout()
  })
})
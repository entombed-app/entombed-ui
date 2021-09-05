describe('Gallery', () => {
  beforeEach(() => {
    //Add additional intercept here for photos
    cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/2", {
        ok: true,
        status: 200, 
        url: "https://elegy-backend.herokuapp.com/api/v1/users/2",
        fixture: 'user'
    })
    cy.visit("http://localhost:3000/")
  })

  it("Should display a login modal if upon visit to site", () => {
    cy.get(".modal")
      .should("be.visible")
  })

  it("Should display a welcome message, email and password inputs, and a login button", () => {
    cy.get("h2")
      .contains("Welcome! Please sign in.")
      .get(".login-input")
      .should("have.length", "2")
      .get("[data-cy=email]")
      .should("be.visible")
      .get("[data-cy=password]")
      .should("be.visible")
      .get(".submit-login")
      .should("be.visible")
  })

  it("Should be able to type in both inputs", () => {
    cy.get("[data-cy=email]")
      .type("email")
      .contains("email")
    cy.get("[data-cy=password]")
      .type("password")
      .contains("password")
  })
})
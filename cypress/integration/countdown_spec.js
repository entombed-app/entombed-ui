describe('Countdown', () => {
  beforeEach(() => {
    cy.interceptGets()
    cy.visit("http://localhost:3000/")
  })

  it('Should be able to visit the countdown by typing in the path in the url', () => {
      cy.visit('http://localhost:3000/countdown')
      cy.login()
      cy.url().should("include", "http://localhost:3000/countdown")
  })

  it('Should redirect from clicking on the sundial icon', () => {
    cy.get(".countdown-pane")
      .click()
    cy.url().should("include", "http://localhost:3000/countdown")
  })

  it("Should display the page title", () => {
    cy.get("h1")
      .contains("Elegy")
  })

  it("Should display the user's profile photo", () => {
    cy.get(".sun")
      .children("img")
      .should("be.visible")
  })

  it("Should redirect user home if title is clicked", () => {
    cy.get(".countdown-pane")
      .click()
    cy.get("h1")
      .click()
    cy.url().should("include", "http://localhost:3000")
  })

  it("Should display the number of days until app release", () => {
    cy.get(".countdown-pane")
      .click()
    cy.get("h2")
      .contains("Days until release: ")
  })

  it("Should display the a sundial graphic with roman numerals", () => {
    cy.get(".countdown-pane")
      .click()
    cy.get(".marks")
      .children(".mark")
      .should("have.length", "12")
  })

  it("Should display a progress bar", () => {
    cy.get(".countdown-pane")
      .click()
    cy.get("svg")
      .children("path")
      .should("be.visible")
  })

  it("Should send out an email when the countdown ends", () => {
    cy.intercept("POST", "https://elegy-backend.herokuapp.com/api/v1/users/2/email", {
        ok: true,
        statusCode: 201,
        body: {}
    }).as("postEmail")
    const now = new Date(2119, 6, 22)

    cy.clock(now)
    cy.get(".countdown-pane")
      .click()
      .get(".email-sent")
      .contains("Email successfully sent. R.I.P")
      .should("be.visible")
      cy.logout()
  })
})
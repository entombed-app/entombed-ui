describe('Countdown', () => {
  beforeEach(() => {

    // cy.fixture("user.json").as("user")
    // cy.intercept("GET", "https://elegy-api.herokuapp.com/api/v1/user/1", {
    //   { 
    //     ok: true,
    //     redirected: false,
    //     status: 201, 
    //     statusTest: "OK",
    //     type: "cors",
    //     url: "https://elegy-api.herokuapp.com/api/v1/user/1",
    //     body: {
    //     fixture: 'user'
    //   }
    // })

    cy.visit("http://localhost:3000")
  })


  it('Should be able to visit the countdown by typing in the path in the url', () => {
      cy.visit('http://localhost:3000/countdown')
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
      .contains("img")
  })

  it("Should redirect user home if title is clicked", () => {
    cy.get("h1")
      .click()
    cy.url().should("inlcude", "http://localhost:3000")
  })
})
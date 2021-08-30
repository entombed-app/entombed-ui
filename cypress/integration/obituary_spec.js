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
  
      cy.visit("http://localhost:3000/obituary")
    })
  
    it('Should be able to visit the obituary by typing in the path in the url', () => {
        cy.url().should("include", "http://localhost:3000/obituary")
    })
  
    it("Should display the obituary page with the default obituary", () => {
      cy.get("h1")
        .contains("Elegy")
        .get("article")
        .contains("Obituary: Lorem ipsum dolor amit")
        .get(".edit-button")
        .contains("Edit")
    })

    it("Should be able to click the edit button, edit the obituary, and see the number of chars I've typed", () => {
      cy.get(".edit-button")
        .click()
        .get(".obit-text")
        .type(" I was always good but I could have been better.")
        .get(".remaining")
        .contains("Limit: 70/500")
    })

    // it("Should display the page title", () => {
    //   cy.get("h1")
    //     .contains("Elegy")
    // })

    // it("Should display the page title", () => {
    //   cy.get("h1")
    //     .contains("Elegy")
    // })

    // it("Should display the page title", () => {
    //   cy.get("h1")
    //     .contains("Elegy")
    // })
  
  })
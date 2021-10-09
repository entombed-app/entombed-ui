describe('Obituary', () => {
    beforeEach(() => {
      cy.interceptGets()
      cy.visit("http://localhost:3000/obituary")
    })
  
    it('Should be able to visit the obituary by typing in the path in the url', () => {
      cy.login()  
      cy.url().should("include", "http://localhost:3000/obituary")
    })
  
    it("Should display the obituary page with the default obituary", () => {
      cy.get("h1")
        .contains("Elegy")
        .get(".obit-text")
        .contains("Tedious and my goodness I am done.")
        .get(".edit-button")
        .contains("Edit")
    })

    it("Should be able to click the edit button, edit the obituary, and see the number of chars typed", () => {
      cy.get(".edit-button")
        .click()
        .get(".obit-text")
        .type(" I was always good but I could have been better.")
        .get(".remaining")
        .contains("Limit: 82/500")
    })

    it("Should show the newly typed obituary after clicking submit", () => {
      cy.intercept("PATCH", "https://elegy-backend.herokuapp.com/api/v1/users/2/",{
        ok: true,
        status: 200,
        body: {}
      }).as("updateObit")

      cy.get(".edit-button")
        .click()
        .get(".obit-text")
        .type(" I was always good but I could have been better.")
        .get(".edit-button")
        .click()
        .get("article")
        .contains("Tedious and my goodness I am done. I was always good but I could have been better.")
    })

    it("Should show an error if the user has not typed anything into the obituary", () => {
      cy.get(".edit-button")
        .click()
        .get(".obit-text")
        .clear()
        .get(".edit-button")
        .click()
        .get(".obit-error")
        .contains("Please type something for your obituary. Click Edit below")
    })

    it("Should show an error if the obituary update fails", () => {
      cy.intercept("PATCH", "https://elegy-backend.herokuapp.com/api/v1/users/2/",{
        ok: false,
        statusCode: 500,
        body: {}
      }).as("patchFail")
      cy.get(".edit-button")
        .click()
        .get(".obit-text")
        .clear()
        .type("banana")
        .get(".edit-button")
        .click()
        .wait("@patchFail")
        .get(".loading-error-message")
        .contains("We could not update your data. Please refresh")
        cy.logout()
      })
  
  })
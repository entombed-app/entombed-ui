describe('Memorial Preview', () => {
    beforeEach(() => {
      cy.interceptGets()
      cy.visit("http://localhost:3000/")
      cy.login()
      .get(".preview-pane")
      .click()
    })

    it('Should be able to visit the memorial preview page by typing in the path in the url', () => {
        cy.url().should("include", "http://localhost:3000/preview")
      })
  
    it("Should display a memorial preview", () => {
      cy.get(".center-sun")
      .should("have.attr", "src").should("include", "http://elegy-backend.herokuapp.com/")
      .get(".name")
      .contains("Elder Bobby")
      .get(".facts")
      .contains("Born")
      .get(".facts")
      .contains("Deceased")
      .get(".prev-exec")
      .contains("younger bobby")
      .get(".prev-exec")
      .contains("888-999-1111")
      .get(".prev-exec")
      .contains("bob@bee.com")
      .get(".prev-obit")
      .contains("Tedious and my goodness I am done")
      .get(".prev-gal")
      .children()
      .should("have.length", 3)
    })
  
  })
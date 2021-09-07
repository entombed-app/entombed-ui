describe('Memorial Preview', () => {
    beforeEach(() => {
        cy.interceptGets()
    })

    it('Should be able to visit the memorial preview page by typing in the path in the url', () => {
        cy.visit("http://localhost:3000/")
        cy.login()
        .get(".preview-pane")
        .click()
        cy.url().should("include", "http://localhost:3000/preview")
    })
  
    it("Should display a memorial preview", () => {
        cy.visit("http://localhost:3000/")
        cy.login()
        .get(".preview-pane")
        .click()
        cy.get(".name")
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

    it("Should be able to navigate to the memorial link without logging in", () => {
        cy.visit("http://localhost:3000/4/memorial")
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

    it("Should not be able to navigate to the home page by clicking the header", () => {
        cy.visit("http://localhost:3000/4/memorial")
        .wait(3000)
        .get(".title")
        .click()
        .get(".title")
        .should("not.have.value", "Elegy")
    })

    it("Should show an error if the fetch does not work for memorial preview", () => {
        cy.interceptFails()
        .visit("http://localhost:3000/preview")
        .login()
        .get(".loading-error-message")
        .contains("Apologies for the error. Please try refreshing the page.")
    })

    it("Should show an error if the fetch does not work for visitor", () => {
        cy.interceptFails()
        .visit("http://localhost:3000/4/memorial")
        .get(".loading-error-message")
        .contains("Apologies for the error. Please try refreshing the page.")
    })
  
  })
describe('Gallery', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/2", {
        ok: true,
        status: 200, 
        url: "https://elegy-backend.herokuapp.com/api/v1/users/2",
        fixture: 'user'
    })
    cy.visit("http://localhost:3000/")
  })

  it('Should be able to visit the gallery page by typing in the path in the url', () => {
    cy.get(".gallery-pane")
      .click()
    cy.url().should("include", "http://localhost:3000/gallery")
  })

  it('Should display the user profile photo in the center pane', () => {
    cy.get(".gallery-pane")
      .click()
      .get(".gal-prof")
      .should("be.visible")
  })

  it('Should have a button for the user to add a photo', () => {
    cy.get(".gallery-pane")
      .click()
      .get(".add-gal-photo")
      .should("be.visible")
  })

  it.skip('Should redirect user to add photo view', () => {
    cy.get(".gallery-pane")
      .click()
      .get(".add-gal-photo")
      .click()
      cy.url().should("include", "http://localhost:3000/add-photo")
  })

  it('Should display the user photos in the panes of the window', () => {
    cy.get(".gallery-pane")
      .click()
      .get(".g-10")
      .should("include", "img")
      .get(".g-17")
      .should("include", "img")
      .get(".g-9")
      .should("include", "img")
  })
});
describe('Gallery', () => {
  beforeEach(() => {
    cy.interceptGets()
    cy.visit("http://localhost:3000/gallery")
  })

  it('Should be able to visit the gallery page by typing in the path in the url', () => {
    cy.login()
    cy.url().should("include", "http://localhost:3000/gallery")
  })

  it('Should tell user which page they are visiting currently', () => {
    cy.get(".gal-head")
      .contains("Gallery")
  })

  it('Should direct the user to add a profile photo if there is none', () => {
    cy.wait(3000)
    cy.get(".gal-rule")
    .should("contain", "Please add a Profile Photo")
  })

  it('Should display the user profile photo in the center pane if there is one', () => {
    cy.intercept("PATCH", "https://elegy-backend.herokuapp.com/api/v1/users/2/profile_picture",{
      ok: true,
      status: 200,
      body: {}
    }).as("updateProfPic")
    cy.get("h1")  
      .click()
    cy.fixture("william.png")
      .then(file => Cypress.Blob.base64StringToBlob(file))
      .then((fileContent) => {
          cy.get(".sun > img")
          .click()
          .get(".photo-upload")
          .attachFile({
              fileContent: fileContent,
              fileName: "william.png",
              mimeType: "image/png"
          })
          .get(".photo-edit-button")
          .click()
          cy.get(".sun > img")
          .should("have.attr", "src").should("include", "blob:http://localhost:3000")
        cy.get(".sun > img")
          .click()
          .get(".user-image")
          .should("have.attr", "src").should("include", "blob:http://localhost:3000")
      })
    cy.get("h1")  
      .click()
    cy.get(".gallery-pane")
      .click()
    cy.get(".gal-prof")
      .should("have.attr", "src").should("include", "blob:http://localhost:3000")
  })

  it('Should have a button for the user to add a photo', () => {
      cy.get(".add-gal-photo")
      .should("be.visible")
  })

  it('Should redirect user to add photo view', () => {
      cy.get(".add-gal-photo")
      .click()
      cy.url().should("include", "http://localhost:3000/add-photo/gallery")
  })

  it("Should allow user to add photos to their gallery", () => {
    cy.intercept("POST", "https://elegy-backend.herokuapp.com/api/v1/users/2/images",{
      ok: true,
      status: 200,
      body: {}
    }).as("post photo")
    cy.fixture("william.png")
      .then(file => Cypress.Blob.base64StringToBlob(file))
      .then((fileContent) => {
        cy.get(".add-gal-photo")
        .click()
          .get(".photo-upload")
          .attachFile({
              fileContent: fileContent,
              fileName: "william.png",
              mimeType: "image/png"
          })
          .get(".photo-edit-button")
          .click()
        cy.get(".g-36 > .gal-img")
          .should("be.visible")
          .should("have.attr", "src").should("include", "blob:http://localhost:3000")
      })
  })

  it('Should display the user photos in the panes of the window', () => {
      cy.get(".g-28")
      .children("img")
      .should("be.visible")
      .get(".g-27")
      .children("img")
      .should("be.visible")
      .get(".g-20")
      .children("img")
      .should("be.visible")
  })

  it('Should show an error if the gallery post fails', () => {
    cy.intercept("POST", "https://elegy-backend.herokuapp.com/api/v1/users/2/images",{
      ok: false,
      statusCode: 403,
      body: {}
    }).as("post photo fail")
    cy.fixture("user.png")
      .then(file => Cypress.Blob.base64StringToBlob(file))
      .then((fileContent) => {
        cy.get(".add-gal-photo")
        .click()
          .get(".photo-upload")
          .attachFile({
              fileContent: fileContent,
              fileName: "william.png",
              mimeType: "image/png"
          })
          .get(".photo-edit-button")
          .click()
        cy.get(".loading-error-message")
          .should("be.visible")
        cy.logout()
      })
  })
});
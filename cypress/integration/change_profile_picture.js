describe("Change Profile Picture", () => {
    beforeEach(() => {
      cy.fixture("user").then((user) => {
          cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/users/2", {
              ok: true,
              status: 200, 
              url: "https://elegy-backend.herokuapp.com/api/v1/users/2",
              body: user
          }).as("getUser")
      })
      cy.visit("http://localhost:3000/")
    })
  
    it('Should be able to load the edit profile picture page by clicking on profile picture', () => {
        cy.wait(3000)
        cy.get(".sun > img")
        .click()
        .get("h2")
        .contains("Edit Profile Picture")
        .get(".square1 > p")
        .contains("Current Profile Picture")
        .get(".photo-form")
        .contains("Upload Your Photo Here")
    })

    it('Should be able to upload a photo and see the photo displayed in the preview pane and in the profile sun', () => {
        cy.intercept("PATCH", "https://elegy-backend.herokuapp.com/api/v1/users/2/profile_picture",{
            ok: true,
            status: 200,
            body: {}
          }).as("updateProfPic")
        cy.wait(3000)
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
            .get(".sun > img")
            .click()
            .get(".user-image")
            .should("have.attr", "src").should("include", "blob:http://localhost:3000")
            .get(".sun > img")
            .should("have.attr", "src").should("include", "blob:http://localhost:3000")
        })
    })
  
  })
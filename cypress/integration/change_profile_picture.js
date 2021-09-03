describe("Change Profile Picture", () => {
    beforeEach(() => {
      cy.fixture("user").then((user) => {
        //   user.data.attributes.profile_picture 
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
        cy.get(".sun > img")
        .click()
        .get("h2")
        .contains("Edit Profile Picture")
        .get(".square1 > p")
        .contains("Current Profile Picture")
        .get(".photo-form")
        .contains("Upload Your Photo Here")
    })

    it('Should be able to upload a photo and see the photo displayed in the preview pane', () => {
        // const userPhoto = "images/william.png"
        cy.fixture('images/user.png').then((william) => {
            cy.get(".sun > img")
            .click()
            .get(".photo-upload")
            .attachFile(william)
            .get(".photo-edit-button")
            .click()
            .get(".user-image")
            .contains(william)
        })
    })
  
  })
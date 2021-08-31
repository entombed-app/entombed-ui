describe('Countdown', () => {
    beforeEach(() => {
      cy.intercept("GET", "https://elegy-backend.herokuapp.com/api/v1/user/1", {
          ok: true,
          status: 200, 
          url: "https://elegy-backend.herokuapp.com/api/v1/user/1",
          fixture: 'user'
      })
      cy.visit("http://localhost:3000/obituary")
    })
  
    it('Should be able to visit the obituary by typing in the path in the url', () => {
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
      cy.get(".edit-button")
        .click()
        .get(".obit-text")
        .type(" I was always good but I could have been better.")
        .get(".edit-button")
        .click()
        .get("article")
        .contains("Tedious and my goodness I'm done. I was always good but I could have been better.")
    })

    it("Should show an error if the user has not typed anything into the obituary", () => {
      cy.get(".edit-button")
        .click()
        .get(".obit-text")
        .clear()
        .get(".edit-button")
        .click()
        .get(".error-message")
        .contains("Please type something for your obituary. Click Edit below")
    })

    it("Should not allow the user to type more than 500 characters", () => {
      cy.get(".edit-button")
        .click()
        .get(".obit-text")
        .type("as;dlkfja;lsdkjfa;lsdkjfal;ksdjf;alskdjfa;lskdfj;alskdfja;lsdkfj;alskdfja;lskdjf;alsdkfja;lsdkfja;lskdjf;alskdjf;alskdjf;laksdjf;laksdjf;alskdjflaksdjfhlaksjdfhqk3leryoiquwefhlkadjshfoiquewyfklasdjhfoqiuewyhflkasjdfhoqieuyfsdlkjfhoq8eiuyfsidjkfhoiweuyfdjfhoq843ieuyfskdjfhoi4q3uyfedjfho8i3u4eyfhaeiuedsfhqku34yewrfieudhfoqu34ewyhrfiedhfoqu3ewhfoisudhfqj3hwefiweuydfhgjq3h4efiuysrdiufhq34eiwuyfq3erwiuyfhoq3iu4weyfhvjshdfgoiuqy34ewhfiusdfhgoiu234ywefiuydshfoiuq234yrfiuyfqiwe4uyhrtoqi234urwyefd9siyuq2")
        .get(".edit-button")
        .click()
        .get("article")
        .contains("Lorem ipsum dolor amit I was always good but I could have been better.")
    })
  
  })
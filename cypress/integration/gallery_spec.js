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
});
const cypress = require("cypress")

describe('Dashboard', () => {
    it('Should be able to visit the dashboard', () => {
        cy.visit('localhost:3000')
    })
})
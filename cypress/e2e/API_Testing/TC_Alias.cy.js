/// <reference types="Cypress" />

describe('Verify Get Request', () => {

    Cypress.config('baseUrl', 'https://reqres.in')

    beforeEach(() => {
        cy.request('GET', '/api/users?page=2').as('users')
    })

    it('Validate Get Request Using Alias', () => {
        
        var response = cy.get('@users')
        response.its('status').should('eq', 200)

        // var response = cy.request('https://reqres.in/api/users?page=2')
        // response.its('status').should('eq', 200)
    });

    it('Validate Get Request - Data Check', () => {
        
        cy.get('@users').then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body.data).to.have.length(6)
            expect(response.body.data[0]).to.have.property('id', 7)
            expect(response.body.data[0]).to.have.property('email', 'michael.lawson@reqres.in')
            expect(response.body.data[0].first_name).to.equal('Michael')
            expect(response.body.data[0]).to.have.property('last_name', 'Lawson')
            expect(response.body.data[0]).to.have.property('avatar', 'https://reqres.in/img/faces/7-image.jpg')

        })

    });

});
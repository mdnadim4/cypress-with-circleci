/// <reference types="Cypress" />

describe('Verify Post Request', () => {

    Cypress.config('baseUrl', 'https://reqres.in')

    it('Sending Post Request', () => {

        const user = {
            "email": "test1@gmail.com",
            "first_name": "William",
            "last_name": "Smith",
            "avatar": "https://dummyimage.com/300.png/09f/fff"
        }

        var response = cy.request('POST', '/api/users', user)
        response.its('status').should('eq', 201)

    });

    it('Sending Post Request - 2nd Way', () => {

        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        })

    });

    it('Validate POST Request - Last Email', () => {

        var name = new Array();

        cy.request('GET', '/api/users').then((response) => {

            let body = JSON.parse(JSON.stringify(response.body))

            body.forEach((element) => {

                name.push(element['name'])

            })

        })

    });

});
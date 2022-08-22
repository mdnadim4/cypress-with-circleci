/// <reference types="Cypress" />

describe('Verify Get Request', () => {
    it('Validate Get Request', () => {
        cy.request('GET','https://reqres.in/api/users?page=2')
        .its('status').should('eq', 200)

        // var response = cy.request('https://reqres.in/api/users?page=2')
        // response.its('status').should('eq', 200)
    });

    it('Validate Get Request - Data Check', () => {
        
        cy.request('https://reqres.in/api/users?page=2').then((response) => {

            expect(response.status).to.equal(200)
            expect(response.body.data).to.have.length(6)
            expect(response.body.data[0]).to.have.property('id', 7)
            expect(response.body.data[0]).to.have.property('email', 'michael.lawson@reqres.in')
            expect(response.body.data[0].first_name).to.equal('Michael')
            expect(response.body.data[0]).to.have.property('last_name', 'Lawson')
            expect(response.body.data[0]).to.have.property('avatar', 'https://reqres.in/img/faces/7-image.jpg')

        })

    });

    it('Validate Get Request - Data Check - 2nd Way', () => {
        
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            headers: {
                accept: "application/json"
            }
        }).then((response) => {
            let body = JSON.parse(JSON.stringify(response.body))
            
            expect(response.status).to.equal(200)
            expect(body.data[0]).has.property('id', 1)
            expect(body.data[0]).has.property('email', "george.bluth@reqres.in")
            expect(body.data[0]).has.property('first_name', "George")
            expect(body.data[0]).has.property('last_name', "Bluth")
            expect(body.data[0]).has.property('avatar', "https://reqres.in/img/faces/1-image.jpg")
        })

    });

    it.only('Validate Get Request - Looping through API', () => {
        
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body))
            
            // Validate All keys data for specific data
            expect(body.data[0]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')

            body.forEach(element => {
                expect(element).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')
                cy.log(`First Name: ${element['email']}`)
            })
            
        })

    });

});
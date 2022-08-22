/// <reference types="Cypress" />

describe('Handling Download File', () => {


    it('Verify File Download option', () => {

        cy.downloadFile('https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png', 'mydowload', 'download.png')

        cy.readFile('./mydowload/download.png', 'base64').should('exist')

    });

    
});
/// <reference types="Cypress" />

describe('Handling Upload File', () => {

    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()
    })

    it('Verify File Upload option', () => {

        const file = 'upload.png';

        cy.get('#myFile').attachFile(file);

        cy.get('#submit-button').click()

        cy.readFile(file, 'base64').should('not.exist')

    });

    it('Verify No File Upload', () => {

        cy.get('#submit-button').click()

    });
    
});
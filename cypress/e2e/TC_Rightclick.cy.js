/// <reference types="Cypress" />

describe('Handling Drag & Drop', () => {

    it('Verify drag & drop option', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    });
    
});
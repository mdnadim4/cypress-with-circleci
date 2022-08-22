/// <reference types="Cypress" />

describe('Handling Tabs', () => {

    it('Verify tabs option', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
    });
    
});
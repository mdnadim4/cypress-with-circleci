/// <reference types="Cypress" />

describe('Handling Tabs', () => {

    it('Verify tabs option', () => {
        cy.visit('https://www.way2automation.com/')
        
        cy.window().then((win) => {
            cy.stub(win, open, () => {
                window.location.href="https://sso.teachable.com/secure/673/identity/login"
            }).as('popup')
        })

        cy.get('@popup').should('be.calledWith', 'https://sso.teachable.com/secure/673/identity/login')
    });
    
});
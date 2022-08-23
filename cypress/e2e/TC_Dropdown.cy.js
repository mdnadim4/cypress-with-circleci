/// <reference types="Cypress" />

describe('Handling Dropdown', () => {
    it('Verify dropdown option', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchLanguage').select('Cymraeg').should('have.value', 'cy')
    });
});
/// <reference types="Cypress" />

describe('Handling Dropdown', () => {
    it('Verify dropdown option', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchLanguage').select('Cymraeg').should('have.value', 'cy')
    });

    it('Verify 2nd dropdown option', () => {
        cy.visit('https://www.goibibo.com/')
        cy.get("#gosuggest_inputSrc").type('Sylhet')
        cy.contains('Osmany Internation Airport').click()
    });
});
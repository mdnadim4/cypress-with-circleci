/// <reference types="Cypress" />

describe('Handling Mouseover', () => {

    it('Verify mouseover option', () => {
        cy.visit('https://www.way2automation.com/')
        cy.contains('Resources').trigger('mouseover')
        cy.contains('Practice Site 1').invoke('removeAttr', 'target').click({force: true})
    });
    
});
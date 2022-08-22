/// <reference types="Cypress" />

describe('Handling Drag & Drop', () => {

    it('Verify drag & drop option', () => {
        cy.visit('https://demoqa.com/droppable')
        // cy.get('#actions').invoke('removeAttr', 'target').click()

        cy.get('#draggable').drag('#droppable', {force: true})
    });
    
});
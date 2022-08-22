/// <reference types="Cypress" />

describe('Handling Checkbox', () => {
    it('Verify checkbox option', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        cy.get('#frame').then(($iframe) => {
           let btnElement = $iframe.contents().find('#button-find-out-more')
           cy.wrap(btnElement).click()
           cy.wait(2000)
           cy.contains('Close').click()
        })
    });
});
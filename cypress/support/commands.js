require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')
import 'cypress-file-upload';




Cypress.Commands.add('contact', (name, email, password, gender, status, date) => {

    cy.get('[name="name"]:nth-child(2)').type(name).should('have.value', name)
    cy.get('[name="email"]').type(email).should('have.value', email)
    cy.get('[type="password"]').type(password).should('have.value', password)
    cy.get('[type="checkbox"]').check().should('be.checked')
    cy.get('[id="exampleFormControlSelect1"]').select(gender).should('have.value', gender)
    cy.get('[type="radio"]').check(status).should('be.checked')
    cy.get('[id="inlineRadio3"]').should('be.disabled')
    cy.get('[type="date"]').type(date)
    cy.get('[type="submit"]').click()
    cy.wait(2000)
    cy.get('.alert-success').should('contain', 'Success! The Form has been submitted successfully')

})

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();



/// <reference types="Cypress" />

describe('Handling Web tables', () => {

    it('Verify webtable option', () => {

        cy.visit('https://money.rediff.com/indices/bse/sensex')

        //total rows
        cy.get('table.dataTable>tbody>tr').should('have.length', 30)

        //total column
        cy.get('table.dataTable>tbody>tr:first-child>td').should('have.length', 6)

        //Get single row data
        cy.get('table.dataTable>tbody>tr').eq(10).within(() => {

            cy.get('td').then((element) => {
                cy.log(element.text())
            })

            cy.get('td').eq(0).should('contain.text', 'Hindustan')

        })

        //Validate data based cell value
        cy.get('table.dataTable').contains('HDFC Bank Ltd').parent().parent().within(() => {


            cy.get('td').eq(2).then((element) => {
                cy.log('Current price is ' + element.text())
                expect(element).to.contain(element.text())
            })

        })

        //Get Entire Table data
        cy.get('table.dataTable>tbody>tr').each((rows) => {

            cy.wrap(rows).within(() => {
                cy.get('td').each((data) => {
                    cy.log(data.text())
                })
            })

        })

    });
    
});
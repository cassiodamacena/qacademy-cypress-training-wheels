describe('Arrastar para as caixas', function () {

    before(function () {
        cy.visit('/drag_and_drop')
    })

    it('Deve arrastar o Cypress para a Caixa Node.js', function () {

        const dataTransfer = new DataTransfer()

        cy.get('img[alt=Cypress]').trigger('dragstart', { dataTransfer })
        cy.get('.nodejs figure[draggable="true"]').trigger('drop', { dataTransfer })

        cy.get('.nodejs')
            .find('figure')
            .find('img')
            .should('have.attr', 'alt')
            .and('equal', 'Cypress')

    })

    it('Deve arrastar o Robot para a Caixa Python', function () {

        const dataTransfer = new DataTransfer()

        cy.get('img[alt="Robot Framework"]').trigger('dragstart', { dataTransfer })
        cy.get('.python figure[draggable="true"]').trigger('drop', { dataTransfer })

        cy.get('.python')
            .find('figure')
            .find('img')
            .should('have.attr', 'alt')
            .and('equal', 'Robot Framework')

    })
})


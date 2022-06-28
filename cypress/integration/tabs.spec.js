it('Nova guia', function () {

    cy.visit('/new_tab')
    cy.contains('a', 'Clique aqui').should('have.attr', 'target', '_blank')
        
    cy.contains('a', 'Clique aqui')
        .invoke('removeAttr', 'target')
        .click()

    cy.get('input.gLFyf').type('Teste Cypress {enter}')

})
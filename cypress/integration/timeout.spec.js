it('exemplo de Timeout', function () {
    cy.visit('/timeout')

    cy.get('#firstname').should('be.visible')
    cy.get('#firstname').should('be.disabled')

    cy.contains('button', 'Habilita').click()
    cy.get('#firstname').should('not.have.attr', 'disabled', {timeout: 1000})

    cy.get('#firstname').type('Cassio', {timeout: 7000})
})
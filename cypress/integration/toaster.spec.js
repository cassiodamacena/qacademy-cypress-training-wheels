it('Deve validar toaster rápido', function () {
    cy.visit('/toaster')
    cy.contains('button', 'Toast Rápido').click()
    cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é muito rápida!')
})
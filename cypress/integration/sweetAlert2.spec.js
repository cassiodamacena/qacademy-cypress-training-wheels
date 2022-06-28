it('Deve exibir mensagem de Sucesso do sweetAlert2', function () {
    cy.visit('/sweet_alert')
    cy.contains('button', 'Sucesso').click()

    cy.get('.swal-icon').should('be.visible')
    cy.get('.swal-title').should('be.visible', 'Tudo certo!')
    cy.get('.swal-text').should('have.text', 'Você clicou no botão verde.')
    cy.contains('.swal-text', 'Você clicou no botão verde.').should('be.visible')

})

it('Deve exibir mensagem Deu Ruim do sweetAlert2', function () {
    cy.visit('/sweet_alert')
    cy.contains('button', 'Deu Ruim').click()

    cy.get('.swal-text').should('be.visible', 'Você clicou no botão vermelho.')
    cy.get('.swal-text').should('have.text', 'Você clicou no botão vermelho.')
    cy.contains('.swal-text', 'Você clicou no botão vermelho.').should('be.visible')

})
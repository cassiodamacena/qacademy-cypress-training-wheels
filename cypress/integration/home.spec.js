it('Deve exibir a home page', function(){
    cy.visit('/')
    cy.title().should('eq', 'Training Wheels | QAninja')        // Valida que existe um <title> com o valor informado
    cy.get('ul.menu-list').should('be.visible')                 // Valida que o elemento existe
    cy.contains('Formulário de login').should('be.visible')     // Valida que o texto "Formulário de login" está sendo exibido na tela
})
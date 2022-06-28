it('Select2: deve selecionar uma única opção', function () {
    cy.visit('apps/select2/index.html')

    cy.get('.select2-selection--single').click()                // Identifica o Select
    cy.contains('.select2-results__option', 'Cypress').click()  // Seleciona com base no texto Visivel
})

it('Select2: deve selecionar multiplas opções', function () {
    cy.visit('apps/select2/index.html')

    const frameworks = [
        'Cypress', 'Robot Framework', 'Protractor'
    ]

    frameworks.forEach(element => {
        cy.get('.select2-selection--multiple').click()          // Identifica o Select
        cy.contains('.select2-results__option', element).click()    // Seleciona com base no texto Visivel
    });

})
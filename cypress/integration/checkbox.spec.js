it('Deve marcar os top cinco filmes da Marvel', function () {
    cy.visit('/checkboxes')
    cy.get('input[name="avengers"]').click()
        .should('be.checked')
    cy.get('input[name="cap2"]').click()
        .should('be.checked')
    cy.get('input[name="guardians"]').click()
        .should('be.checked')
    cy.get('input[name="blackpanther"]').click()
        .should('be.checked')
    cy.get('input[name="thor3"]').click()
        .should('be.checked')
})

it('Mesmo código melhorado com concatenação simples', function () {
    cy.visit('/checkboxes')
    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ]

    movies.forEach(element => {
        cy.get('input[name="'+element+'"]').click()
        .should('be.checked')
    });

})

it('Mesmo código melhorado com interpolação', function () {
    cy.visit('/checkboxes')
    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ]

    movies.forEach(element => {
        cy.log(element)
        cy.get(`input[name="${element}"]`).click()
        .should('be.checked')
    });

})



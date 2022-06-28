it('Selecionar buchy por Texto Visivel', function () {
    cy.visit('/select')
    cy.get('#avengerList')
        .select('Bucky')                //Selecionando o texto visivel
        .should('have.value', '2')      // Validando o value com valor 2
})

it.only('Selecionar TonyStark', function(){
    cy.visit('/select')
    cy.contains('option', 'Selecione um personagem')
    .parent()
    .select('Tony Stark')
    .should('have.value', 3)
})
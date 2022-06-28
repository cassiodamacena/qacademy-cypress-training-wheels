it('Deve logar com sucesso', function () {
    cy.visit('/login')
    cy.get("#nickId").type('papitorocks')
    cy.get("#passId").type('pwd123')
    cy.get('button[type="submit"]').click()

    const expectedTitle = 'Olá Papito, bem-vindo ao Orkut'
    const expectedText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'
    cy.get('h3.title').should('have.text', expectedTitle)
    cy.get('p.subheader').should('have.text', expectedText)
})
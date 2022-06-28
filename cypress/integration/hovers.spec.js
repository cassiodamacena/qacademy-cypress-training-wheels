it('Deve exibir o nome da tecnologia Node.js ao passar o mouse', function () {
    cy.visit('/hovers')

    cy.get('img[src*=nodejs]').realHover('mouse')
    cy.get('.tag-nodejs')
        .should('be.visible')
        .should('have.text', 'Node.js')
})

it('Deve exibir o nome das tecnologias ao passar o mouse', function () {
    cy.visit('/hovers')

    const techs = [
        { imgLocator: 'img[src*=python]', tag: '.tag-python', text: 'Python' },
        { imgLocator: 'img[src*=golang]', tag: '.tag-golang', text: 'Golang' },
        { imgLocator: 'img[src*=nodejs]', tag: '.tag-nodejs', text: 'Node.js' },
        { imgLocator: 'img[src*=netcore]', tag: '.tag-netcore', text: '.NETCore' }
    ]

    techs.forEach(tech => {
        cy.get(tech.imgLocator).realHover('mouse')
        cy.get(tech.tag)
            .should('be.visible')
            .should('have.text', tech.text)
        cy.wait(10)
    });

})
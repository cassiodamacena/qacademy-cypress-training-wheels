it('Deve realizar o upload de imagem', function(){
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/cassio.jpg'

    cy.get('#file-upload').selectFile(imageFile, {force: true})

    cy.get('#file-submit').click()
    cy.get('img[src="/uploads/cassio.jpg"]', {timeout: 7000}).should('be.visible')
})
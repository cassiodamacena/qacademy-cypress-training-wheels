it('Deve marcar radio button', function(){
    cy.visit('/radios')
    cy.get('input[value="cap3"]').click().should('be.checked')
})
const niceIFrame = function () {
    return cy.get('#weareqaninja')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
}

const badIFrame = function () {
    return cy.get('iframe[src*="instagram"]')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
}

it('Deve validar o total de seguidores do IFram Bom', function () {
    cy.visit('/nice_iframe')

    niceIFrame()
        .contains('span.FollowerCountText', '6,744 followers')
        .should('be.visible')
})

it('Deve validar o total de seguidores do IFram Ruim', function () {
    cy.visit('/bad_iframe')

    badIFrame()
        .contains('span.FollowerCountText', '6,744 followers')
        .should('be.visible')
})
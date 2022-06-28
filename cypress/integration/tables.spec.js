it('Deve exibir sete séries no total', function () {
    cy.visit('/tables')

    cy.get('table tbody tr')
        .then(function (series) {
            console.log(series)
            cy.log(series)
            expect(series).to.have.length(7)
        })
})

it('Deve exibir a série Lok', function () {
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Loki')
        .then(function (serie) {
            expect(serie).to.contain('Marvel')
            expect(serie).to.contain('Disney+')
            expect(serie).to.contain('2021')
        })
})

it('Deve remover a série Round 6', function () {
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Round 6')
        .then(function (serie) {
            //serie.find('.delete').click()
            serie.find('.delete').trigger('click')
        })
        .should('not.exist')

    cy.get('table tbody tr')
        .then(function (series) {
            console.log(series)
            cy.log(series)
            expect(series).to.have.length(6)
        })
})
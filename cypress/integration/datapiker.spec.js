it('Selecionando DatePicker, expressão regurar na massa de teste', function () {

    const date = {
        month: 'mai',
        yer: '1987',
        day: /^1$/g     // Começa com 8 e termina com 8
    }

    cy.visit('/datepicker')
    cy.get('.datetimepicker-dummy-input').click()
    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()
    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.yer).click()
    //cy.contains('button[class=date-item]', date.day).click()
    cy.contains('button[class=date-item]', date.day).click()
    cy.get('#date')
        .should('have.attr', 'value')
        .and('equal', '01/05/1987')
})

it('Selecionando DatePicker, expressão regurar na identificação do elemento', function () {

    const date = {
        month: 'mai',
        yer: '1987',
        day: '8'
    }

    cy.visit('/datepicker')
    cy.get('.datetimepicker-dummy-input').click()
    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()
    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.yer).click()
    //cy.contains('button[class=date-item]', date.day).click()
    cy.contains('button[class=date-item]', new RegExp("^" + date.day + "$", "g")).click()

})
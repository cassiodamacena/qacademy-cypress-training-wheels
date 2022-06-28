it('Deve exibir uma mensagem de alerta', function(){
    cy.visit('/javascript_alerts')

    cy.get('button.is-info').click()

    cy.on('window:alert', function(result){
        console.log(result)
        expect(result).to.eq('Isto é uma mensagem de alerta')
        expect(result).to.eql('Isto é uma mensagem de alerta')
        expect(result).to.equal('Isto é uma mensagem de alerta')
        expect(result).to.equals('Isto é uma mensagem de alerta')
    })
})

it('Deve confirmar a solicitação', function(){
    cy.contains('button', 'Confirma').click()
    cy.on('window:confirm', () => true )
    cy.get('#result').should('have.text', 'Mensagem confirmada')
})

it('Deve cancelar a solicitação', function(){
    cy.contains('button', 'Confirma').click()
    cy.on('window:confirm', () => false )
    cy.get('#result').should('have.text', 'Mensagem não confirmada')
})

it.only('Deve exibir mensagem de boas vindas com o meu nome', function(){
    
    cy.visit('/javascript_alerts')
    cy.window().then(function($win){
        cy.contains('button', 'Prompt').click()
        cy.stub($win, 'prompt').returns('Cassio')
    })

    cy.get('#result').should('have.text', 'Olá, Cassio')
})
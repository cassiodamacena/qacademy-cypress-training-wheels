describe('Entendendo os ganchos Before, BeforeEach, After e AfterEach', function () {

    before(function(){
        cy.log("Vai rodar apenas uma vez ANTES de todos os casos de testes")
    })

    beforeEach(function(){
        cy.log("Vai rodar uma vez ANTES de cada teste")
    })

    after(function(){
        cy.log("Vai rodar apenas uma vez DEPOIS de todos os casos de testes")
    })

    afterEach(function(){
        cy.log("Vai rodar uma vez DEPOIS de cada teste")
    })

    it('Teste 1', function () {
        cy.log('Testando o teste 1')
    })

    it('Teste 2', function () {
        cy.log('Testando o teste 2')
    })

    it('Teste 3', function () {
        cy.log('Testando o teste 3')
    })
})


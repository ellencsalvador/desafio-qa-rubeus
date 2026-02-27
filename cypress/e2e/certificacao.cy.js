describe('Processo Seletivo Qualidade Rubeus - Certificação', () => {
  
  it('Deve validar o erro de base legal ao tentar avançar na inscrição', () => {
    // Dado que acesso a página de certificação
    cy.visit('/certificacao');

    // Quando preencho os dados obrigatórios
    cy.get('input[name="nome"]').type('Ellen Salvador');
    cy.get('input[name="telefone"]').type('11979918822');
    cy.get('input[name="email"]').type('ellenc_salvador@yahoo.com.br');

    // E clico em avançar
    cy.contains('AVANÇAR').click();

    // Então o sistema deve exibir o erro de base legal (Bug Identificado)
    cy.contains('É necessário informar a base legal').should('be.visible');
  });
});
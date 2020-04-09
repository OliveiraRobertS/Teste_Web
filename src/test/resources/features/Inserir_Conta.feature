Feature: Cadastro de contas

Como um usuario 
Gostaria de cadastrar contas
Para que eu possa distribuir meu dinheiro de uma forma mais organizada

Scenario: Deve inserir uma conta com sucesso
Given que estou acessando a aplicacao
When informo o usuario "oliveira_roberts@hotmail.com"
And a senha "123"
And seleciono entrar
Then visualizo a pagina inicial
When seleciono Contas
And seleciono Adicionar
And informo a conta "Robert Silva"
And seleciono Salvar
Then a conta e inserida com sucesso

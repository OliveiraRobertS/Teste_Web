$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Inserir_Conta.feature");
formatter.feature({
  "name": "Cadastro de contas",
  "description": "Como um usuario \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que estou acessando a aplicacao",
  "keyword": "Given "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.queEstouAcessandoAAplicacao()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o usuario \"oliveira_roberts@hotmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.informoOUsuario(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a senha \"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.aSenha(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono entrar",
  "keyword": "And "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.selecionoEntrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a pagina inicial",
  "keyword": "Then "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.visualizoAPaginaInicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Contas",
  "keyword": "When "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.selecionoContas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "And "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo a conta \"Robert Silva\"",
  "keyword": "And "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.informoAConta(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Salvar",
  "keyword": "And "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.selecionoSalvar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a conta e inserida com sucesso",
  "keyword": "Then "
});
formatter.match({
  "location": "br.robert.steps.InserirContasSteps.aContaEInseridaComSucesso()"
});
formatter.result({
  "status": "passed"
});
});
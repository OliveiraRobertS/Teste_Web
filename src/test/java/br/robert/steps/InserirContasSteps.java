package br.robert.steps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class InserirContasSteps {
	
	private WebDriver driver;
	
	@Given("que estou acessando a aplicacao")
	public void queEstouAcessandoAAplicacao() throws InterruptedException {
	    driver = new ChromeDriver();
	    driver.get("https://srbarriga.herokuapp.com");
	    Thread.sleep(5000);
	}

	@When("informo o usuario {string}")
	public void informoOUsuario(String string) {
	   driver.findElement(By.id("email")).sendKeys(string);
	}
	@When("a senha {string}")
	public void aSenha(String string) throws InterruptedException {
	   driver.findElement(By.name("senha")).sendKeys(string);
	   Thread.sleep(5000);	   
	   
	}
	@When("seleciono entrar")
	public void selecionoEntrar() throws InterruptedException {
	    driver.findElement(By.tagName("button")).click();
	    Thread.sleep(5000);
	}
	@Then("visualizo a pagina inicial")
	public void visualizoAPaginaInicial() {
	    String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    Assert.assertEquals("Bem vindo, ROBERT SILVA!", texto);
	    
	}
	@When("seleciono Contas")
	public void selecionoContas() {
	    driver.findElement(By.linkText("Contas")).click();
	}
	@When("seleciono Adicionar")
	public void selecionoAdicionar() {
		 driver.findElement(By.linkText("Adicionar")).click();
		
	   
	}
	@When("informo a conta {string}")
	public void informoAConta(String string) {
	    driver.findElement(By.name("nome")).sendKeys(string);
	}
	@When("seleciono Salvar")
	public void selecionoSalvar() {
	    driver.findElement(By.tagName("button")).click();
	    
	}
	@Then("a conta e inserida com sucesso")
	public void aContaEInseridaComSucesso() {
		String texto = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    Assert.assertEquals("Conta adicionada com sucesso!", texto);
	    driver.quit();	    
	}

}

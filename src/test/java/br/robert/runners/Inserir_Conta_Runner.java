package br.robert.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;
import cucumber.api.cli.Main;


@SuppressWarnings({ "deprecation", "unused" })
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/Inserir_Conta.feature",
		glue = "br.robert.steps",
		tags = {},
		plugin = {"pretty", "html:target/report-html"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)	

public class Inserir_Conta_Runner {

}

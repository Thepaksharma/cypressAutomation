const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

//For Excel To JSON Conversion
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  require('cypress-mochawesome-reporter/plugin')(on); //Created a mochawesome-reporter listener

  //Task for Excel to JSON Conversion
  on('task', {
    ExcelToJSONConvertor(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath)
      }
      )
      return result
    }
  })

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;


}

module.exports = defineConfig({



  video: true, //Video recoding will be a default now
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com/loginpagePractise/"

  },
  projectId: "rosigg",  //Project id fpr the cloud report genration
  retries: 0, //Reattempts the failes Spec
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js'

  },
});


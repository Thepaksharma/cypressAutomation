const { defineConfig } = require("cypress");

module.exports = defineConfig({

  video: true, //Video recoding will be a default now
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com/loginpagePractise/"

  },
  projectId: "rosigg",  //Project id fpr the cloud report genration
  retries: 1, //Reattempts the failes Spec
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //Created a mochawesome-reporter listener
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});


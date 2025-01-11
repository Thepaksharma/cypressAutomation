Feature: "Ecoomerce website end to end verification"

@regression
    Scenario: To test the Ecommerce End to end verofication

        Given User visits the Ecommerce Page
        When User submits the Username and Password
        When User click on the add product button
        When User clicks on the checkout button
        When User verifies the details on the Checkout Page
        When User clicks on the Success button
        Then User checksout the product and verifies the Thank You message


@smoke
    Scenario Outline: To test the Ecommerce End to end verofication with cucumber parametrisation

        Given User visits the Ecommerce Page
        When User submits the Username and Password with parameters
            | userName           | password |
            | rahulshettyacademy | learning |
        When User click on the add product button
        When User clicks on the checkout button
        When User verifies the details on the Checkout Page
        When User clicks on the Success button
        Then User checksout the product and verifies the Thank You message
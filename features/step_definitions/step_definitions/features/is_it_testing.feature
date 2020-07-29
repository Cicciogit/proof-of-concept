Feature: Is the Error Page
  Everybody wants to know if gherkin works

 Scenario: The Title should be "UI Testing Site" on every site REQ-UI-01 
   Given The user begins from the Docler "Home" Page
   Then  The user should see the Title  "UI Testing Site"
   When  The user is heading the Docler "Form" Page
   Then  The user should also see the Title  "UI Testing Site"
   When  The user goes also on the Docler "Error" Page
   Then  The user should also see there the Title  "UI Testing Site"

   
Scenario: The Company Logo should be visible on every site REQ-UI-02 

   Given The user gets back to the Docler "Home" Page
   Then  The user should notice the "Docler Holding" Company Logo 
   When  The user gets back to "Form" Page
   Then  The user should notice also there the "Docler Holding" Company Logo
   When  The user goes eventually  on the Docler "Error" Page
   Then  The user should see  "Docler Holding" Company Logo


   Scenario: When I click on the Home button, I should get navigated to the Home page REQ-UI-03 
   Given The user is on the Docler Home Page
   When The user decides to click on the "Home" button
   Then  The user URL should be "http://uitest.duodecadits.com/"



   Scenario: When I click on the Home button, it should turn to active status  REQ-UI-04 

   Given The keeps staying on the Docler Home Page
   When The user clicks the "Home" button
   Then The status of the button should turn to 'active'


    Scenario: When I click on the Form button, I should get navigated to the Form page  REQ-UI-05 
    Given The user kept staying on the Docler Home Page
    When The user in the case clicks the "Form" button
    Then The user should be redirected to the following URL "http://uitest.duodecadits.com/form.html"


  Scenario: I click on the Form button, it should turn to active status
  Given The user has selected the Form Page
  Then The status of the "Form" button should turn to 'active'





  Scenario: Finding an error page  REQ-UI-07
   Given The user is on the Docler Home Page
   When The user clicks on the "Error" button
   Then  The user should get a "404" HTTP response code

  
 

Scenario: Finding one input box  and one submit button  REQ-UI-11
   Given The user is again on the Docler Home Page
   When The user clicks here on the "Form" button
   Then The user should notice an "input" box and a submit "button"




 



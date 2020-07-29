

const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Capabilities,WebDriver, Key, until, WebElement } = require('selenium-webdriver');
//const { assert } = require('chai');
var fs = require('fs');

require("chromedriver");

var {setDefaultTimeout} = require('cucumber');
//const { assert } = require('console');
setDefaultTimeout(100 * 1000);

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();
const assert = require('assert');
const { cpuUsage } = require('process');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//const { expect } = require('chai');

// take into account weird async patterns of selenium and assert not triggering..
var asyncForEach = async function(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}


//Scenario: The Title should be "UI Testing Site" on every site REQ-UI-01 #

Given('The user begins from the Docler {string} Page', async function (searchTerm) {
   // the driver clicks on the home page 
    driver.get('http://uitest.duodecadits.com/');
  
});

Then('The user should see the Title  {string}', async function (title_expected_0) {
  // the tile of the page is captured by the driver
  var title_result = await driver.getTitle();
  // a match check is done between the page of the title and the text inserted in the scenario
 assert.equal(title_expected_0,title_result);
});

When('The user is heading the Docler {string} Page', async function (searchTerm_form) {
  // the search term is converted in lower case
  var form_page = (searchTerm_form).toLowerCase().toString();
  // the button is retrieved by its id proprerty and the method click is applied
    await driver.findElement(By.id(form_page)).click();
});

Then('The user should also see the Title  {string}', async function (title_expected_1) {
  // the button is retrieved by its id proprerty and the method click is applied
  var title_result1 = await driver.getTitle();
  // a match check is done between the page of the title and the text inserted in the scenario
 assert.equal(title_expected_1,title_result1);
});


When('The user goes also on the Docler {string} Page',  async function (searchTerm_error) {
  // the search term is converted in lower case
  var error_page = (searchTerm_error).toLowerCase().toString();
  // the button is retrieved by its id proprerty and the method click is applied
    await driver.findElement(By.id(error_page)).click();
 
});

Then('The user should also see there the Title  {string}', async function (title_expected_2) {
  // the tile of the page is captured by the driver
  var title_result2 = await driver.getTitle();
  // a match check is done between the page of the title and the text inserted in the scenario
  assert.equal(title_expected_2,title_result2);
});




//The Company Logo should be visible on every site REQ-UI-02 
// Given The user gets back to the Docler "Home" Page
Given('The user gets back to the Docler {string} Page', function (string) {
   // the driver navigates to the Home Page Url, it would be possible to use a string from the scenario
  driver.get('http://uitest.duodecadits.com/');
  
});
//Then The user should notice the "Docler Holding" Company Logo
Then('The user should notice the {string} Company Logo', async function (searchTerm_logo) {
   // the driver retrieves the image by its tagname and checks if the image is displayed, a boolean is stored in a variable
  var imagedisplayed =  await driver.findElement(By.tagName('img')).isDisplayed();
   // the boolean is asserted if true
  assert.equal(imagedisplayed,true)
});

//When The user gets back to "Form" Page
When('The user gets back to {string} Page', async function (searchTerm_form_1) {
  // the driver navigates to the Form Page Url by using the string from the scenario
  var form_page_1 = (searchTerm_form_1).toLowerCase().toString();
  // the Form button is retrieved by its id and get clicked
    await driver.findElement(By.id(form_page_1)).click();
});

//Then The user should notice also there the "Docler Holding" Company Logo
Then('The user should notice also there the {string} Company Logo', async  function (string) {
   // the driver retrieves the image by its tagname and checks if the image is displayed, a boolean is stored in a variable
  var imagedisplayed = await driver.findElement(By.tagName('img')).isDisplayed();
   // the boolean is asserted if true
  assert.equal(imagedisplayed,true)
});

//When The user goes eventually  on the Docler "Error" Page
When('The user goes eventually  on the Docler {string} Page', async function (searchTerm_form_2) {
  // the driver navigates to the Home Page Url by using the string from the scenario
  var form_page_2 = (searchTerm_form_2).toLowerCase().toString();
  // the button is retrieved by its id and get clicked
    await driver.findElement(By.id(form_page_2)).click();
});


Then('The user should see  {string} Company Logo', async function (string) {
  // the driver retrieves the image by its tagname and checks if the image is displayed, a boolean is stored in a variable
  var imagedisplayed = await driver.findElement(By.tagName('img')).isDisplayed();
  // the boolean is asserted if true
  assert.equal(imagedisplayed,true)
});


///************************
///Scenario: Finding  the Home page  REQ-UI-03
///************************
Given('The user is  back on the Docler Home Page', function () {
  // the driver navigates to the Home Page
  driver.get('http://uitest.duodecadits.com/');
});


When('The user decides to click on the {string} button', async function (searchTermhome) {
   // the  Home button is retrieved by its id and get clicked
  var home_page = (searchTermhome).toLowerCase().toString();
  driver.findElement(By.id(home_page)).click();
     
  
});

Then('The user URL should be {string}', async function (searchTerm) {
  // the currect URL is identified and converted into a string and put in a variable
  var currentURL2  = (await driver.getCurrentUrl()).toString();
  // a match is done between the term used in the scenario and the current URL 
  assert.equal(searchTerm, currentURL2);
});

///************************
///Scenario: Finding  the Home page  REQ-UI-04
///************************
Given('The keeps staying on the Docler Home Page', function () {
  // the driver navigates to the Home Page
  driver.get('http://uitest.duodecadits.com/')
});


When('The user clicks the {string} button', async function (searchTermhome) {
  // the form button is selected by using the term in the scenario
  var home_page = (searchTermhome).toLowerCase().toString();
  driver.findElement(By.id(home_page)).click();
});


Then('The status of the button should turn to {string}', async function (active) {
  // the  active attribute is captured by the id element of the 'home' button
  var active_button = await driver.findElement(By.id('home')).getAttribute(active);
  
  //a match is done between the attribute ans a string - under construction 
  assert.equal(active_button, 'active');
});

///************************
///Scenario: Finding  the Form page  REQ-UI-05
///************************
//Given The user is still on the Docler Home Page//

Given('The user kept staying on the Docler Home Page', function () {
   // the driver navigates to the Home Page
  driver.get('http://uitest.duodecadits.com/')
});

//When The user in the case clicks the "Form" button
When('The user in the case clicks the {string} button', async function (formbutton) {
  // the form button is selected by using the term in the scenario
  var form_button_string = (formbutton).toLowerCase().toString();
  await driver.findElement(By.id(form_button_string)).click();
  // a screenshot is done for testing purposes
  driver.takeScreenshot().then(function(data) {
    fs.writeFileSync('img.png',data,'base64');
 });
});



//Then The user should be redirected to the following URL "http://uitest.duodecadits.com/form.html"
Then('The user should be redirected to the following URL {string}', async function (expected_form_page_url) {
  // the current URL is captured, converted into a string and put into a variable
var current_form_page_url  = (await driver.getCurrentUrl()).toString();
// a match is done between the expected URL inserted in the scenario and the current URL
  assert.equal(expected_form_page_url,current_form_page_url);
});

///************************
///Scenario: Checking if the form button is active  REQ-UI-06 - Under construction
///************************

//Given The user has selected the Form Page
Given('The user has selected the Form Page', function () {
   // the driver navigates to the Home Page
  driver.get('http://uitest.duodecadits.com/')
});


//Then The status of the "Form" button should turn to 'active'
Then('The status of the {string} button should turn to {string}', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


///************************
// Finding an error page  REQ-UI-07
///************************

  Given('The user is on the Docler Home Page', function () {
    driver.get('http://uitest.duodecadits.com/');
  });

  

  When('The user clicks on the {string} button', async function (searchTerm) {
    // clik on the error button using the term in the scenario
    var testerror = (searchTerm).toLowerCase().toString();
    await driver.findElement(By.id(testerror)).click();
    // waiting a moment to see watch happens because its too fast
    driver.wait(until.titleIs('404 Error: File not found :-)'), 100000);
    
});


Then('The user should get a {string} HTTP response code', async function (searchTerm) {
  // the driver captures the current URL, a string is created and stored in a variable
  var currentURL  = (await driver.getCurrentUrl()).toString();
  // a http request is set up and performed using the variable 
  var xhr = new XMLHttpRequest();
xhr.open('GET', currentURL, false); //'http://uitest.duodecadits.com/error'
xhr.send(null);
// a match is done between the search term in the scenario and the http return
assert.equal(searchTerm, xhr.status);
  
});





///************************
///Scenario: Finding   one input box and one submit button  REQ-UI-11
///************************
Given('The user is again on the Docler Home Page', function () {
    driver.get('http://uitest.duodecadits.com/');
  
});


When('The user clicks here on the {string} button', async function (searchTerm) {
  var testform = (searchTerm).toLowerCase().toString();
    await driver.findElement(By.id(testform)).click();
    
    
});



Then('The user should notice an {string} box and a submit {string}', async function (searchTerm_1,searchTerm_2) {
  //the button is retrieved by is tagname and a boolean to check is its displayed is stored
  var button_diplayed_0 =  await driver.findElement(By.tagName(searchTerm_1)).isDisplayed();
    //the boolean is asserted as true
   assert.equal(button_diplayed_0,true);
   // voir pour le passer en tagname
   //the button is retrieved by is tagname and a boolean to check is its displayed is stored
   var button_diplayed_1 =  await driver.findElement(By.className('btn btn-default')).isDisplayed();
    //the boolean is asserted as true
   assert.equal(button_diplayed_1,true); 
});




///some try to get the REQ-UI-12 
// the Scenario Outline did not convert the variable into angle brackets <>

When(/^I enter "(.*)" as invalid username$/, function ( goat ) {
  console.log("display Parameter passed : " + goat );
});

When(/^The User enters "(.*)" in the input field$/, function (value) {
  console.log("display Parameter passed : " + value );
  return 'pending';
});



AfterAll('end', async function(){

    await driver.quit();
});

const { Given, When, Then, AfterAll } = require('cucumber');

//const { assert } = require('chai');
var fs = require('fs');

require("chromedriver");
require('./pom');

var {setDefaultTimeout} = require('cucumber');
//const { assert } = require('console');
setDefaultTimeout(100 * 1000);


const assert = require('assert');
const { cpuUsage } = require('process');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//const { expect } = require('chai');

var test = require('./pom');
const { Driver } = require('selenium-webdriver/chrome');

  Given('I am on the Docler Home Page', function () {
    test.navigate_to_The_TestRoom ();
   
  });

  Then('I click on the {string} button', function (string) {
    // Write code here that turns the phrase above into concrete actions
    test.click_to_The_TestRoom ("Go!");
  });
  

//AfterAll('end', async function(){
 //await driver.quit();
//});
const { Builder, By, Capabilities,WebDriver, Key, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();

class HomePage {

  async navigate_to_The_TestRoom (){
    driver.get('http://uitest.duodecadits.com/form.html');
  }
    
  async click_to_The_TestRoom (buttonText){
    var inputs = await driver.findElements(By.tagName("button"));
    inputs.forEach(async function (element) {
      var innerHTML = await element.getAttribute('innerHTML');
      if (innerHTML == buttonText)
        element.click();
    });
  }


}

module.exports = new HomePage ();
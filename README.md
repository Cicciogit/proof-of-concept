# proof-of-concept
As as I decided not to use Nightwatch to write the scenarios in Gherkin, I had to install cucumber by using the Node Package Manager in three steps : 

1 - This the first step is to install  Cucumber.js module that can ce use in a code editor such as Visual Studio Code

npm install  --save-dev cucumber

2 - It will the then necessarry a selenium webdriver in order to automate the interactions with the webpages

 npm install selenium-webdriver
 
3- As the browser should be chromedriver, this is also to be installed 

npm install -g chromedriver


Once this installed we can open the Visual Studio Code an open the folder that has been creater during the npm installations
The cucumber.js and node_modules files are already created, along with the json file that contains all the depencies use by the code. 
But two files containing the are to be created. A first one containing the Gherking steps in ".feature" format 
and a second one in ".js" format

In order to run this code, you will need to install the httprequest that can be used to get the server's 404 message.

npm install w3c-xmlhttprequest

The test can be executed with the following command in the visual studio code terminal: 

 npm test

 
 



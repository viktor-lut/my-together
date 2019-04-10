# Together / Coop Server

**Together** - is a web-application that allows a user to create a social event and post it publicly
to all users or within a specified group of users. Any user can join/share/comment on the event. 
Any event can be geographically filtered/located.

## Pre-install

1. Check if you have installed Node.js. Run in terminal `node -v`
If node is not installed, download and install it from here: https://nodejs.org/en/

2. Check if you have installed `git`. Run in terminal `git`
If git is not installed, download and install it from here: https://git-scm.com/downloads

3. Check if you are added as a collaborator to 'bogutski/together' repository(repo).


## Installation 

1. Clone the repo on your local machine. 
There are 2 ways to clone the repo:

*through terminal. Run in terminal:
`git clone git@github.com:bogutski/together.git`.

*through Webstorm. When opening Webstorm, choose `Check out from Version Control` 
  and enter URL: `https://github.com/bogutski/together.git`.

2. Open a project in Webstorm.

3. Open terminal in Webstorm and run `npm i` or `npm install`.

If you have not installed `nodemon`, install it by using the following terminal command: `npm install -g nodemon`.
Nodemon allows to start a server once and it will restart automatically on the code change. 

## Start 

To start the server, you can run one of the scripts in terminal:

*`npm start`(the server will start running but no changes will be applied to the running instance of the application.
 You will have to stop and restart the server manually to reflect the changes. This script will running in production.)

*`npm run dev` (the server will start running and will restart automatically if any changes are made to the sourcecode ).

For more info, watch: https://youtu.be/q8YzwAbrVSY

If you don't have permission to install `nodemon`, run `npm start`.

## Env
https://coop-server.herokuapp.com/

## Videos
1. https://youtu.be/q8YzwAbrVSY 'Instruction on how to install server'.
2. https://youtu.be/1Bxp50ri8o8 'Hiroku adjustment'.
3. https://youtu.be/0Jce4nPulGs 'Module message'.
4. https://youtu.be/AWRHpVvq_uU 'Overall server structure using the example of PASV'.
5. https://youtu.be/wJKULr9ZEz8 'Database connection to the app. MongoDB Atlas'

## Modules

#### Express 
Web framework for node.js.

#### Morgan (Logger)
Path: `/modules/core/logger.js`.
This module allows to see in console logs like `POST /info 200 3.405 ms - 23`.

### Features: 

* Add a rating of events, communities of interests. Show the most popular topics of meetings according to their area.
* Let the person who creates an event make it public or private for a specific group of people.

### API Testing With Postman Sample Instructions:
1. Open the Postman.
2. Create and name the new workspace (first time only). Change type of your workspace to 'personal'.
3. In the left top corner, choose 'Import' and import 3 JSON files that are located in together/docs/postman folder of the project.
4. In the right top corner, change 'No Environment' to 'Remote' environment. 

* Testing 'Get All':
  - now, if you send the request, you should see a list of users in the response body;
  - examples of automated test scripts to test 'Get All':
  ```
         /*1.To check if we get the response, run the following test script that 
            checks that our response message is 'success': */ 
            
            pm.test("Response is success", function () { 
                let jsonData = pm.response.json();
                pm.expect(jsonData.success).to.equal(true)  	       
            });  	            
            	            
          /*2.To check if there is at least one user registered in database, 
             run the following test script that checks if our array of users is greater than 0: */
           
            pm.test("Payload is not empty", function () {  
                let jsonData = pm.response.json();
                pm.expect(jsonData.payload).to.have.lengthOf.above(0)
                pm.response.to.have.status(200)
            }); 
   ```
   
* Testing 'Register':
    - Examples of positive automated test scripts to test 'Register'(make sure you have valid input in 'Body' 
    on the request panel located on top of the request field):
    ```
             /*1.To check if we get the response, run the following test script that 
                 confirms it is a 'success': */ 
                         
                         pm.test("Response is success", function () { 
                             let jsonData = pm.response.json();
                             pm.expect(jsonData.success).to.equal(true)  	       
                         });  	            
                         	            
              /*2.To check if we get a correct returning message when a user has been registered, run the following script:
              
              pm.test("Correct response message", function () {  
                  let jsonData = pm.response.json();
                  pm.expect(jsonData.message).to.equal("User was created successfully. Please check and verify your email")  	
               });
                  
              /* Expected result - 'pass', expected response message - "User was created successfully. 
              Please check and verify your email".*/
     ```
              
    - Examples of negative automated test scripts to test 'Register'.
      Enter invalid email (e.g. "itrusevich").
     ```
                 /* 1. To check if we get the response, run the following test script that 
                 checks that our response message is NOT 'success'(ecpected result - 'fail': */ 
                 
               pm.test("Response is success", function () { 
                  let jsonData = pm.response.json();
                  pm.expect(jsonData.success).to.equal(true)  	       
                });  	 
               
               /* 2.To check if we get a correct returning error handling message 
               when a user has NOT been registered, run the following script: */ 
               
               pm.test("Correct Error message", function () {  
                   let jsonData = pm.response.json();
                   pm.expect(jsonData.message).to.equal("User was not created")  	
                   });
               
               // Expected result - 'pass', expected response message - "User was not created". 
     ```
                           
* Testing 'Get By Id': (to be added when functionality is deployed)

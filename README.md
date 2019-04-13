# Together / Coop Server

**Together** - is a web-based application that allows a user to create a social event and then post it publicly
to all the users or within a specified group of users. Any user can join/share/comment on the event. 
Any event can be geographically filtered/located.

## Pre-install

1. Check if you have installed Node.js. Run in terminal `node -v`
If Node.js is not installed, then download and install it from here: https://nodejs.org/en/

2. Check if you have installed `git`. Run in terminal `git`
If git is not installed, download and install it from here: https://git-scm.com/downloads

3. Check if you are added as a collaborator to 'bogutski/together' repository(repo).


## Installation 

1. Clone the repo on your local machine. 
There are 2 ways to clone the repo:

*through terminal. Run in terminal:
`git clone git@github.com:bogutski/together.git`.

*through Webstorm. When opening Webstorm, choose `Check out from Version Control` 
  and enter the URL: `https://github.com/bogutski/together.git`.

2. Open the project in Webstorm.

3. Open terminal in Webstorm and run `npm i` or `npm install`.

If you have not installed `nodemon`, then install it by using the following terminal command: `npm install -g nodemon`.
Nodemon allows to start a server once and it will restart automatically on the code change. 

## Start 

To start the server, you can run one of the scripts in terminal:

*`npm start`(the server will start running but no changes will be applied to the running instance of the application.
 You will have to stop and then restart the server manually to reflect the changes. This script will be running in production.)

*`npm run dev` (the server will start running and will restart automatically if any changes are made to the sourcecode ).

For more info, watch this video: https://youtu.be/q8YzwAbrVSY

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
Web framework for Node.js.

#### Morgan (Logger)
Path: `/modules/core/logger.js`.
This module allows to see in console logs like `POST /info 200 3.405 ms - 23`.

### Features: 

* Add the rating of events, groups of interests. Show the most popular topics of meetings according to their area.
* Let the person who creates an event make it public or private for a specific group of people.

### API Testing With Postman Sample Instructions:
1. Open the Postman.
2. Create and name a new workspace (first time only). Change the type of your workspace to 'personal'.
3. In the left-top corner, choose 'Import' and import 3 JSON files that are located in together/docs/postman folder of the project.
4. In the right-top corner, change 'No Environment' to 'Remote' environment. 

* Testing **User** Requests:
* 'Get All':
  - now, if you send a request, you should see a list of all users in the response body;
  - examples of automated test scripts to test 'Get All':
  ```
         /*1.To check if we get a response, run the following test script that 
            checks that our response message is 'success': */ 
            
            pm.test("Response is success", function () { 
                let jsonData = pm.response.json();
                pm.expect(jsonData.success).to.equal(true)  	       
            });  	            
            	            
          /*2.To check if there is at least one user registered in the database, 
             run the following test script that checks if our array of users is greater than 0: */
           
            pm.test("Payload is not empty", function () {  
                let jsonData = pm.response.json();
                pm.expect(jsonData.payload).to.have.lengthOf.above(0)
                pm.response.to.have.status(200)
            }); 
   ```
   
* 'Register':
    - Examples of positive automated test scripts to test 'Register'(make sure you have a valid input in 'Body' 
    on the request panel located on top of the request field):
    ```
             /*1.To check if we get a response, run the following test script that 
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
      Enter invalid email (e.g. "alexjones").
     ```
                 /* 1. To check if we get a response, run the following test script that 
                 checks that our response message is NOT 'success'(expected result - 'fail': */ 
                 
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
                           
* 'Get By Id': (to be added when the functionality is deployed)

    ### Group Entity
    **‘Group’** is an entity that is created for a group of users with similar interests. Each user can be the ‘owner’ or a ‘member’ of multiple groups.
    
    **Fields:**  
    * _'id'_ (required). Type: string (consists of 24 symbols which are generated automatically);
    * _'name'_ (required, unique). Type: string (accepts 1-15 symbols, 1st symbol - any letter in upper case, other symbols - any letters, numbers, space));
    * _'description'_ (not required). Type: string (describes the group interest);
    * _'owner'_ (required). Type: string (ID of the user who created the group);
    * _'members'_ (not required). Type: array of strings(IDs of members of the group);
    * _'accessType'_ (required). Type: string. The field accepts two values: ‘all’ or ‘members’.
    
    
    **Request types:**   
    - **_POST Create:_**   
       Controller: groupCreate;  
       URL: {{host}}/group/  
       To create a new group, required fields have to be manually assigned.  
       Required fields: name, accessType, owner;  
       Status code 201 (created) - successful message ‘Group created’ displayed;  
       Status code 500 (Internal Server Error) - error message ‘Incorrect request’. Incorrect field will be displayed.  
    
    - **_GET All:_**  
       Controller: groupGetAll  
       URL: {{host}}/group/  
       For ‘get all’ request, ‘userId’ has to be entered. Response should include all groups that the user has access to.  
       Response status code 200 (OK) - successful message ‘Groups are showed’ displayed;  
       Response status code 500 (Internal Server Error) - error message ‘Incorrect request’ displayed.  
    
    - **_GET by Id:_**  
       Controller: groupGetById;  
       URL: {{host}}/group/groupId  
       Payload object in response consists of fields of the group + the date when the group was created + the date when it was updated.  
       Response status code 200 (OK) - successful message ‘The group is found’ displayed;  
       Response status code 404 (Not found) - error message ‘No group for the provided id’ displayed;  
       Response status code 500 (Internal Server Error) - error message ‘Incorrect group id’ displayed.  
    
    - **_PATCH Update by Id:_**  
       Controller: groupUpdateById;  
       URL: {{host}}/group/groupId  
       To make updates, changing fields have to be reassigned. Note: ‘groupId’ is an immutable field that CANNOT be changed.  
       Response status code 200 (OK) - successful message ‘Group updated’ displayed;  
       Response status code 400 (Bad Request)- error message ‘Group not found’ displayed;  
       Response status code 500 (Internal Server Error) - error message ‘Incorrect request or a group id’ displayed.  

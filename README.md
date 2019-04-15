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
2. Create and name the new workspace (first time only). Change the type of your workspace to 'personal'.
3. In the left top corner, choose 'Import' and import 3 JSON files that are located in together/docs/postman folder of the project.
4. In the right top corner, change 'No Environment' to 'Remote' environment. 

* Testing 'Get All' for USER entity:
  - now, if you send a request, you should see a list of users in the response body;
  - examples of positive automated test scripts to test 'Get All':
  ```
         /*1.To check if we get a response with correct status, run the following test script that 
             checks if the the response has status '200': */ 
             
         pm.test("Status code is 200", function () {
             pm.response.to.have.status(200);
         });

         /*2.To check if we get a succesful response, run the following test script that 
             checks that our response message is 'success': */ 
             
         const jsonData = pm.response.json(); 
         /*you need to declare this variable before running any test where you are going to use it!!!*/
             
         pm.test("Success is true", function () {
              pm.expect(jsonData.success).to.eql(true);
              pm.expect(jsonData.fail).to.eql(false);
         });

         /*3.To check if there is a message in response, run the following test script that checks 
             if the message exists: */

         pm.test("Message exists", function () {
             pm.expect(jsonData.message).to.not.be.undefined;
         });

         /*4.To check if we get a correct message when the users info has been returned, run the following script: */
              
          pm.test("Correct response message", function () {  
              pm.expect(jsonData.message).to.equal('User Get All')  	
          });
          /*expected result - 'pass', expected response message - "User Get All".*/
        
         /*5.To check if there is at least one user registered in the database, 
             run the following test script that checks if our array of users is greater than 0: */
           
         pm.test("Payload is not empty array", function () {
             pm.expect(jsonData.payload).to.be.an('array').that.is.lengthOf.above(0);
         });

         /*6.To check if each element of our array is an object and user, 
             run the following test script that checks if our elements of array are not empty: */

         pm.test("Each Element is User", function () {
             for(let i = 0; i < jsonData.payload.length; i++){
                 pm.expect(jsonData.payload[i]).to.be.an('object');
                 pm.expect(jsonData.payload[i].name).to.not.be.empty;
                 pm.expect(jsonData.payload[i]._id).to.not.be.empty;
                 pm.expect(jsonData.payload[i].email).to.not.be.empty;
                 pm.expect(jsonData.payload[i].password).to.be.undefined;
             }
          });   
   ```
* Negative tests 'Get All' for USER entity (to be added).  

* Testing 'Get By Id' for USER entity: 
   *The first three examples of automated test scripts to test 'Get By Id' are the same as the first three tests for the 'Get All' request.
   - examples of positive automated test scripts (make sure you have a VALID INPUT for User ID in the address bar on the request panel):
   ```
          /*1.To check if we get a correct message when the user info has been returned, run the following script: */
              
          const jsonData = pm.response.json();
          /*you need to declare this variable before running any test where you are going to use it!!!*/
          
          pm.test("Correct response message", function () {  
              pm.expect(jsonData.message).to.equal('User Get By Id')  	
          });      
          /*expected result - 'pass', expected response message - "User Get By Id".*/

          /*2.To check if there is a user registered in database with this ID, 
          run the following test script that checks if our object with user's info is not empty */

          pm.test("Payload is not empty object", function () {
              for (let key in this.payload){
                 pm.expect(this.payload.key).to.not.be.empty;     
              }
          });
            
   ```
* Negative tests 'Get By Id' for USER entity (to be added).

* Testing 'Register'for USER entity:
  *The first three examples of automated test scripts are the same as the first three tests for the 'Get All' request.
  - examples of positive automated test scripts to test 'Register' (make sure you have a VALID INPUT for User info in the 'Body' on the request panel located on the top of the request field):):
   ```              
         /*1.To check if we get a correct message when a user has been registered, run the following script: */
              
         const jsonData = pm.response.json();
         /*you need to declare this variable before running any test where you are going to use it!!!*/
         
         pm.test("Correct response message", function () {                   
             pm.expect(jsonData.message).to.equal('User was created successfully. Please check and verify your email')  	
              });
         /*expected result - 'pass', expected response message - "User was created successfully. 
           Please check and verify your email".*/
   ```
  - examples of negative automated test scripts to test 'Register' for USER entity.
    Enter invalid email (e.g. "itrusevich").
  ```
         /*2.To check if we get a response, run the following test script that 
             checks that our response message is NOT 'success'(expected result - 'fail': */ 

         const jsonData = pm.response.json();
         /*you need to declare this variable before running any test where you are going to use it!!!*/
         
         pm.test("Response is success", function () { 
              pm.expect(jsonData.success).to.equal(true)  	       
         });  	 
               
         /* 3.To check if we get a correct returning error handling message 
              when a user has NOT been registered, run the following script: */ 
               
         pm.test("Correct Error message", function () {  
              pm.expect(jsonData.message).to.equal("User was not created")  	
         });
         /*expected result - 'pass', expected response message - "User was not created". */
  ```
* More negative tests 'Register' for USER entity (to be added).

* Testing 'Get All' for GROUP entity:
  - now, if you send a request, you should see a list of groups in the response body;
  - examples of positive automated test scripts to test 'Get All':
   ```
         /*1.To check if we get a response with correct status, run the following test script that 
             checks if the the response has status '200': */ 

         pm.test("Status code is 200", function () {
              pm.response.to.have.status(200);
         });

         /*2.To check if we get a succesful response, run the following test script that 
             checks that our response message is 'success': */ 
             
            const jsonData = pm.response.json();
            /*you need to declare this variable before running any test where you are going to use it!!!*/
            
            pm.test("Success is true", function () {
                pm.expect(jsonData.success).to.eql(true);
                pm.expect(jsonData.fail).to.eql(false);
         );

         /*3.To check if there is a message in response, run the following test script that checks 
             if the message exists: */

         pm.test("Message exists", function () {
             pm.expect(jsonData.message).to.not.be.undefined;
         });

         /*4.To check if we get a correct returning message when each group info has been returned, run the following script: */
              
         pm.test("Correct response message", function () {  
             pm.expect(jsonData.message).to.equal('Groups are showed')  	
         });
         /*expected result - 'pass', expected response message - "Groups are showed". */
           
         /*5.To check if there is at least one group registered in database, 
             run the following test script that checks if our array of groups is greater than 0: */
           
         pm.test("Payload is not empty array", function () {
             pm.expect(jsonData.payload).to.be.an('array').that.is.lengthOf.above(0);
         });

         /*6.To check if each element of our array is object and group, 
             run the following test script that checks if our elements of array are not empty: */

         pm.test("Each Element is Group", function () {
             for(let i = 0; i < jsonData.payload.length; i++){
                  pm.expect(jsonData.payload[i]).to.be.an('object');
                  pm.expect(jsonData.payload[i].description).to.not.be.empty;
                  pm.expect(jsonData.payload[i].members).to.not.be.empty;
                  pm.expect(jsonData.payload[i]._id).to.not.be.empty;
                  pm.expect(jsonData.payload[i].name).to.not.be.empty;
                  pm.expect(jsonData.payload[i].owner).to.not.to.be.empty;
                  pm.expect(jsonData.payload[i].createdAt).to.not.be.empty;
                  pm.expect(jsonData.payload[i].updatedAt).to.not.be.empty;
             }
         }); 
   ```
* Negative tests 'Get All' for GROUP entity (to be added).

* Testing 'Get By Id' for GROUP entity: 
   *The first three examples of automated test scripts to test 'Get By Id' are the same as the first three tests for the 'Get All' request.
   - examples of positive automated test scripts (make sure you have a VALID INPUT for Group ID in the address bar on the request panel):
   ```
          /*1.To check if we get a correct message when the group info has been returned, run the following script: */
              
          const jsonData = pm.response.json();
          /*you need to declare this variable before running any test where you are going to use it!!!*/
          
          pm.test("Correct response message", function () {  
              pm.expect(jsonData.message).to.equal('The group is found')  	
          });       
          /*expected result - 'pass', expected response message - "The group is found".*/         
      
         /*2.To check if there is a group in database with this ID, 
             run the following test script that checks if our object of users is not empty */
   
         pm.test("Payload is not empty object", function () {
             for (let key in this.payload){
                   pm.expect(this.payload.key).to.not.be.empty;     
             }
         });
   ```
* Negative tests 'Get By Id' for GROUP entity (to be added).

* Testing 'Update by ID' for GROUP entity: 
  *The first three examples of automated test scripts to test 'Get By Id' are the same as the first three tests for the 'Get All' request.
   - example of positive automated test scripts to test 'Update By Id' (make sure you have a VALID INPUT for Group ID in the 'Body' on the request panel located on the top of the request field):
   
   ```
            /*1.To check if we get a correct message when a group has been updated, run the following script: */
              
            const jsonData = pm.response.json();
            /*you need to declare this variable before running any test where you are going to use it!!!*/
            
            pm.test("Correct response message", function () {  
                pm.expect(jsonData.message).to.equal('Group updated')  	
            });   
            /*expected result - 'pass', expected response message - "Group updated".*/
   ```
* Negative tests 'Update By Id' for GROUP entity (to be added).

* Testing 'Create' for GROUP entity: 
   - now, if you send a request, you should see the data of a new group created in the database in the response body ;
   - example of positive automated test scripts to test 'Update By Id' (make sure you have a VALID INPUT for Group info in the 'Body' on the request panel located on the top of the request field):
    ```
            /*1.To check if we get a response with correct status, run the following test script that 
             checks if the the response has status '201': */ 

            pm.test("Successful CREATE request", function () {
                pm.expect(pm.response.code).to.be.oneOf([201,202]);
            });
             
            /*2.To check if we get a succesful response, run the following test script that 
             checks that our response message is 'success': */ 
             
            const jsonData = pm.response.json();
            /*you need to declare this variable before running any test where you are going to use it!!!*/ 
       
            pm.test("Success is true", function () {
                pm.expect(jsonData.success).to.eql(true);
                pm.expect(jsonData.fail).to.eql(false);
            });

            /*3.To check if there is a message in response, run the following test script that checks 
             if the message exists: */

            pm.test("Message exists", function () {
                pm.expect(jsonData.message).to.not.be.undefined;
            });

            /*4.To check if we get a correct message when the groups info has been returned, run the following script: */
              
            pm.test("Correct response message", function () {  
                pm.expect(jsonData.message).to.equal('Group created')  	
            });
            /*expected result - 'pass', expected response message - "Group created". */

            /*5.To check if there is info about a group created in the database, 
             run the following test script that checks if our object with info is not empty */
   
            pm.test("Payload is not empty object", function () {
                for (let key in this.payload){
                      pm.expect(this.payload.key).to.not.be.empty;     
                }
            });

            /*6.To check if there is an ID of a group created in the database, 
             run the following script */

            pm.test("Body matches string", function () {
                pm.expect(pm.response.text()).to.include("groupId");
            });   
 
* Negative tests 'Create' for GROUP entity (to be added).

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

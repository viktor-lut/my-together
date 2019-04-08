# Together / Coop Server

**Together** - is a web-application that allows a user to create a social event and post it publicly
to all users or within a specified group of users. Other users can join/share/comment on the event. 
All events can be geographically filtered.

## Pre-install

1. Check if you have installed Node.js. Run in terminal `node -v`
If node is not installed, download and install it from here: https://nodejs.org/en/

2. Check if you have installed `git`. Run in terminal `git`
If git is not installed, download and install it from here: https://git-scm.com/downloads

3. Check if you are added as a collaborator to 'bogutski/together' repository(repo).


## Installation 

1. Clone this repo to your local machine. 
There are 2 ways to clone a repo:

*through terminal. Run in terminal:
`git clone git@github.com:bogutski/together.git`.

*through Webstorm. When opening Webstorm, choose `Check out from Version Control` 
  and enter URL: `https://github.com/bogutski/together.git`.

2. Open project in Webstorm.

3. Open terminal in Webstorm and run `npm i` or `npm init`.

If you have not installed `nodemon`, install it by using the following terminal command: `npm install -g nodemon`.
Nodemon allows to start server once and it will restart automatically on code change. 

## Start 

To start the server, you can run one of the scripts in terminal:

*`npm start`(the server will start running but no changes will be applied to the running instance of the application.
 You will have to stop and restart the server manually to reflect the changes. This script will run in  production.)

*`npm run dev` (the server will start running and will restart automatically if any changes to the sourcecode are made).

For more info, watch: https://youtu.be/q8YzwAbrVSY

If you don't have permission to install `nodemon`, run `npm start`.

## Env
https://coop-server.herokuapp.com/

## Modules

#### Express 
Web framework for node.js.

#### Morgan (Logger)
Path: `/modules/core/logger.js`.
This module allows to see in console logs like `POST /info 200 3.405 ms - 23`.

### Features: 

* Add a rating of events, communities of interests. Show the most popular topics of meetings according to their area.
* Let person who creates the event make it public or private for specific group of people.


# Together / Coop Server

**Together** - is a web-application that allows a user to create a social event and post it publicly
to all users or within a specified group of users. Other users can join/share/comment on the event. 
All events can be geographically filtered.

## Pre install

Check if you have installed Node.js. Run in terminal `node -v`
Install node https://nodejs.org/en/

Check if you have installed `git`. Run in terminal `git`
Install git https://git-scm.com/downloads

## Installation 

Clone this repo to your local machine 
`git clone git@github.com:bogutski/together.git`

Open project in Webstorm.
Open terminal in Webstorm and run `npm i`

If you have not installed `nodemon` install it: `npm install -g nodemon`
Nodemon allows start server once and it will restart automatically on code change. 

## Start 
Run in terminal `npm run dev`
If you don't have permission to install `nodemon`, run in terminal `npm start`

## Env
https://coop-server.herokuapp.com/


## Modules

#### Express 
Web framework for node.js.

#### Morgan (Logger)
Path: `/modules/core/logger.js`.
Allows to see in console logs like `POST /info 200 3.405 ms - 23`.

### Features: 
* Add a rating of events, communities of interests. Show the most popular topics of meetings according to their area.
* Let person who creates the event makes it public or private for specific group of people.

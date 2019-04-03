# Together / Coop Server

## Pre install

Check if you have installed Node.js. Run in terminal `node -v`
Install node https://nodejs.org/en/

Check if you have installed `git`. Run in terminal `git`


## Installation 

Clone this repo to your local machine 
`git clone git@github.com:bogutski/together.git`

Open project in Webstorm.
Open terminal in Webstorm and run `npm i`

If you have not installed `nodemon` install it: `npm install -g nodemon`
Nodemon allows start server once and it will restart automatically on code change. 

## Start 
Run in terminal `npm run dev`

## Modules

#### Express 
Web framework for node.js.

#### Morgan (Logger)
Path: `/modules/core/logger.js`.
Allows to see in console logs like `POST /info 200 3.405 ms - 23`.


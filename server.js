//********************************************************************************************* */

// WRAPPI app

//Made by Roman Tuomisto & Pauliina Veijalainen

// Apps code and and idea are under copyright protection.

// All Rights reserved, 2019

// App uses Node JS on the backend, React and redux on front-end and MySql as Dataase.

/************************************************************************************************ */

// HOW TO RUN THIS APP

/**************************************************************************************************/

// This is min Nodejs webserver Wrappi apps file.
// It will serve REACT client as json api
// user authentication implemented using jwt-tokens.

// This file is the one that gets always executed wen wwe tart our webapp. 
// Node runs this main file to strat process.
//This file will start our server on port that we specify and it will recieve
// all requests that we will send to port 8080 and later in production.

//require database and connect to it
//require("./dbConnection");
//Setup web apps dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const errorHandler = require("./handlers/errorHandler");

/** require routes here */
const authRoutes = require('./routes/login');

//Initialize express application
const app = express();

app.set("trust proxy", true);
// Set port and ip for webapp
app.set("port", process.env.PORT);
app.set("ip", process.env.IP);

//use cors
app.use(cors());
//Setup middleware to parse incoming requests to this web api
app.use(bodyParser.json());

//Setup morgan production and development logging here
if(app.get("env") === "Websiteion") {
    app.use(morgan("common", {
        skip: function(req, res) {
            return res.statusCode < 400
        }, stream: __dirname + '/../morgan.log'
    }));
} else {
    app.use(morgan('dev'));
}

app.use("/api", authRoutes);

//Serve react app in production to the browser
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, + "/looppi-client/build")));
    app.get("*", (req, res) => {
        res.sendFile("index.html");
    });
}

app.use(errorHandler);

app.listen(app.get("port"), app.get("ip"), (error) => {
    console.log("Wrappi appi palvelin on startattu portilla "+app.get("port")+" apin ip on "+app.get("ip")+".");
});
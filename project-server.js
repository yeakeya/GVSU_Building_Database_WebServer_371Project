/* Included Packages */
const express = require("express")
const bodyParser = require("body-parser")
let cookieParser = require('cookie-parser')

/* Server & Controller Setup */
const app = express()
const port = 5838/*
const BuildingController = require("./controllers/BuildingController")
const buildingController = new BuildingController()*/

/* Parser & App Setup */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

/* Handling POST Requests */


/* Handling GET Requests */


/* Launch the server */
app.listen(port, () => console.log("GVSU Buildings Semester Project (Anderson Yeakey) server listening on port %d!", port))

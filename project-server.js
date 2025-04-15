/* Included Packages */
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")

/* Server & Controller Setup */
const app = express()
const port = 5838
const BuildingController = require("./controllers/building-controller")
const buildingController = new BuildingController()
const UserController = require("./controllers/user-controller")
const userController = new UserController()

/* Parser & App Setup */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "beje3n25u24bntlhwjb5jh45jk4wb"
}))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/styles"))
app.use(express.static(__dirname + "/scripts"))

/* Authentication Function */
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next()
    } else {       
        req.session.returnTo = req.originalUrl
        res.redirect('/userLogin')
    }
}

/* Handling POST Requests */
app.post("/userLogin", async (req, res) => {
    const loginResponse = await userController.login(req, res)
    res.json(loginResponse)
})

/* Handling GET Requests */
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.get("/userLogin", (req, res) => {
    userController.renderLogin(req, res)
})

app.get("/", isAuthenticated/* TODO: remove after testing, only applies to edit pages */, (req, res) => {
    buildingController.renderIndex(req, res)
})

app.get("/campus/:name", (req, res) => {
    buildingController.renderCampus(req, res)
})

app.get("/:name", (req, res) => {
    buildingController.renderBuilding(req, res)
})

/* Launch the server */
app.listen(port, () => console.log("GVSU Buildings Semester Project (Anderson Yeakey) server listening on port %d!", port))

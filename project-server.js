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
//app.use(express.static("public"))
//app.use(express.static("styles"))
//app.use(express.static("scripts"))
app.use(express.static(__dirname))

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

app.post("/userLogout", async (req, res) => {
    await userController.logout(req, res)
})

app.post("/building/:name/edit", async (req, res) => {
    await buildingController.saveEdit(req, res)
})

/* Handling GET Requests */
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.get("/userLogin", (req, res) => {
    userController.renderLogin(req, res)
})

app.get("/", (req, res) => {
    buildingController.renderIndex(req, res)
})

app.get("/campus/:name", (req, res) => {
    buildingController.renderCampus(req, res)
})

app.get("/building/:name", (req, res) => {
    buildingController.renderBuilding(req, res)
})

app.get("/building/:name/edit", isAuthenticated, (req, res) => {
    buildingController.renderEdit(req, res)
})

app.get("/edits/view", isAuthenticated, (req, res) => {
    buildingController.renderViewEdits(req, res)
})

/* Launch the server */
app.listen(port, () => console.log("GVSU Buildings Semester Project (Anderson Yeakey) server listening on port %d!", port))

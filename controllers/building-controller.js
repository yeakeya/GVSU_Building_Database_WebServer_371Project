const Building = require("../models/Building")
const buildingDB = require('../databases/building-db')
const editDB = require('../databases/edit-db')
const dbInitializer = require('../databases/initialize-db')

class buildingController {
    constructor() {
        //dbInitializer.createUsers()
        //dbInitializer.createBuildings()
        //dbInitializer.createEdits()
    }

    async renderIndex(req, res) {
        let username = ""
        try {
            username = req.session.user
        } catch {
            username = "guest"
        }
        let buildings = await buildingDB.allBuildings()
        //let buildings = [{name: "Niemeyer"},{name: "Padnos"},{name: "Kirkhof"},{name: "Kleiner"}]
        res.render("index", { buildings: buildings, username: username })
    }

    async renderCampus(req, res) {
        let username = ""
        try {
            username = req.session.user
        } catch {
            username = "guest"
        }
        let buildings = await buildingDB.buildingFilter('campus', req.params.name)
        //let buildings = [{name: "Niemeyer"},{name: "Padnos"},{name: "Kirkhof"},{name: "Kleiner"}]
        res.render("campus-page", { campus: req.params.name, buildings: buildings, username: username })
    }

    async renderBuilding(req, res) {
        let username = ""
        try {
            username = req.session.user
        } catch {
            username = "guest"
        }
        let building = await buildingDB.buildingFilter('name', req.params.name)
        //let building = {name: "Niemeyer Living Center", abbreviation: "NLC", description: "The honors college. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", address: "175 Calder Dr.", yearBuilt: 1978, area: 5493, campus: "Allendale"}
	    res.render("building-page", { building: building, username: username })
    }

    async renderEdit(req, res) {
        let username = ""
        try {
            username = req.session.user
        } catch {
            username = "guest"
        }
        let building = await buildingDB.buildingFilter('name', req.params.name)
        //let building = {name: "Niemeyer Living Center", abbreviation: "NLC", description: "The honors college. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", address: "175 Calder Dr.", yearBuilt: 1978, area: 5493, campus: "Allendale"}
	    res.render("edit-page", { building: building, username: username })
    }

    async renderViewEdits(req, res) {
        let username = ""
        try {
            username = req.session.user
        } catch {
            username = "guest"
        }
        let edits = await editDB.findEdits(req.session.user)
        //let edits = [{username: "yeakeya", likes: ["yeakeya"], name: "Niemeyer"}]
        res.render("view-edits-page", { edits: edits, username: username })
    }

    async saveEdit(req, res) {
        let submission = new Building(req.body)
	if (submission.yearBuilt == "") {
	    submission.yearBuilt = 0
	} else {
            submission.yearBuilt = Number(submission.yearBuilt)
	}
	if (submission.area == "") {
	    submission.area = 0
	} else {
	    submission.area = Number(submission.area)
	}
        if (submission.isValid()) {
	    if ((await editDB.findEdits(req.session.user)).length > 0) {
		await editDB.removeEdit(req.session.user)
	    }
            await editDB.addEdit(req.session.user, "{}", req.body)
        }
        res.redirect("/edits/view")
    }
}

module.exports = buildingController

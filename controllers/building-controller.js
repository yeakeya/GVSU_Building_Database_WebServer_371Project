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
	res.render("edit-page", { building: building, username: username })
    }

    async renderViewEdits(req, res) {
        let username = ""
        try {
            username = req.session.user
        } catch {
            username = "guest"
        }
        let edits = await editDB.allEdits()
        res.render("view-edits-page", { edits: edits, username: username })
    }

    async saveEdit(req, res) {
        let submission = new Building(req.body)
	if (submission.yearbuilt == "") {
	    submission.yearbuilt = 0
	} else {
            submission.yearbuilt = Number(submission.yearbuilt)
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

    async handleLike(req, res) {
        let numLikes = 0
        numLikes = await editDB.addLike(req.session.user, req.body.targetUser)
        if (numLikes >= 10) {
            let building = (await editDB.findEdits(req.body.targetUser))[0]
            await buildingDB.setBuilding(building)
            await editDB.removeEdit(req.body.targetUser)
        }
        return("" + numLikes)
    }
}

module.exports = buildingController

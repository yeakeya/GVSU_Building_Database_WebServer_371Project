const Building = require("../models/Building")
//const buildingDB = require('../database/building-db')

class buildingController {
    constructor() {
        //buildingDB.initialize();
    }

    async renderIndex(req, res) {
        let buildings = [{name: "Niemeyer"},{name: "Padnos"},{name: "Kirkhof"},{name: "Kleiner"}]
        res.render("index", { buildings: buildings })
    }
}

module.exports = buildingController

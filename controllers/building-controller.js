const Building = require("../models/Building")
const buildingDB = require('../databases/building-db')
const buildingInitializer = require('../databases/building-initialize-db')

class buildingController {
    constructor() {
        buildingInitializer.createBuildings()
    }

    async renderIndex(req, res) {
        let buildings = await buildingDB.allBuildings();
        //let buildings = [{name: "Niemeyer"},{name: "Padnos"},{name: "Kirkhof"},{name: "Kleiner"}]
        res.render("index", { buildings: buildings })
    }

    async renderCampus(req, res) {
        let buildings = await buildingDB.buildingFilter("campus", req.params.name)
        //let buildings = [{name: "Niemeyer"},{name: "Padnos"},{name: "Kirkhof"},{name: "Kleiner"}]
        res.render("campus-page", { campus: req.params.name, buildings: buildings })
    }

    async renderBuilding(req, res) {
        let building = await buildingDB.buildingFilter("name", req.params.name)
        //let building = {name: "Niemeyer Living Center", abbreviation: "NLC", description: "The honors college. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", address: "175 Calder Dr.", yearBuilt: 1978, area: 5493, campus: "Allendale"}
        res.render("building-page", { building: building })
    }
}

module.exports = buildingController

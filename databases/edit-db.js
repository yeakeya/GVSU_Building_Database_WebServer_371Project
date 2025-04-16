const db = require("./index-db");
const Building = require("../models/Building")

async function addEdit(username, likes, building) {
    await db.query("INSERT INTO edits (username, likes, name, abbreviation, description, address, yearBuilt, area, campus) VALUES ('" + username + "', " + likes + ", '" + building.name + "', '" + building.description + "', '" + building.abbreviation + "', '" + building.address + "', " + building.yearBuilt + ", " + building.area + ", '" + building.campus + "')")
}

module.exports = {
    addEdit
}

const db = require("./index-db");

async function allBuildings() {
    const result = await db.query("SELECT * FROM buildings")
    return result.rows;
}

async function buildingFilter(attribute, value) {
    let findValue = value
    if (typeof findValue === "string") {
        findValue = "\'" + findValue + "\'"
    }

    const result = await db.query("SELECT * FROM buildings WHERE (" + attribute + " = " + findValue + ")")
    if (attribute == "name") {
        return result.rows[0];
    } else {
        return result.rows;
    }
}

async function setBuilding(building) {
    if (typeof building.yearBuilt === 'undefined') {
	building.yearBuilt = 0
    }
    await db.query("UPDATE buildings SET (abbreviation, description, address, yearbuilt, area, campus) = ('" + building.abbreviation + "', '" + building.description + "', '" + building.address + "', " + building.yearBuilt + ", " + building.area + ", '" + building.campus + "') WHERE name = '" + building.name + "'")
}

module.exports = {
    allBuildings,
    buildingFilter,
    setBuilding
};

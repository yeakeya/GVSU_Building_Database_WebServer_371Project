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
    await db.query("UPDATE buildings SET (name, abbreviation, description, address, yearBuilt, area, campus) = ('" + building.name + "', '" + building.abbreviation + "', '" + building.description + "', '" + building.address + "', " + building.yearBuilt + ", " + building.area + ", '" + building.campus + "') WHERE name = '" + building.name + "'")
}

module.exports = {
    allBuildings,
    buildingFilter,
    setBuilding
};

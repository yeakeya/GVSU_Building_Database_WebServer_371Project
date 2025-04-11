const db = require("./index-db");

async function allBuildings() {
    const result = await db.query("SELECT * FROM buildings");
    return result.rows;
}

async function buildingFilter(attribute, value) {
    let findValue = value
    if (typeof findValue === "string") {
        findValue = "\"" + findValue + "\""
    }

    const result = await db.query("SELECT * FROM buildings WHERE (" + attribute + " == " + findValue + ")");
    if (attribute == "name") {
        return result.rows[0];
    } else {
        return result.rows;
    }
}

module.exports = {
    allBuildings,
    buildingFilter
};

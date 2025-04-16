const db = require("./index-db");

async function addEdit(username, likes, building) {
    await db.query("INSERT INTO edits (username, likes, name, abbreviation, description, address, yearBuilt, area, campus) VALUES ('" + username + "', '" + likes + "', '" + building.name + "', '" + building.abbreviation + "', '" + building.description + "', '" + building.address + "', " + Number(building.yearBuilt) + ", " + building.area + ", '" + building.campus + "')")
}

async function findEdits(username) {
    const result = await db.query("SELECT * FROM edits WHERE (username = '" + username + "')")
    return result.rows;
}

async function addLike(username, targetUser) {
    let likes = await findEdits(targetUser)[0].likes
    console.log(likes)
    likes.push(username)
    likes = likes.toString()
    likes = likes.replace("[", "{")
    likes = likes.replace("]", "}")
    console.log(likes)
    await db.query("UPDATE edits SET likes = '" + likes + "' WHERE username = '" + targetUser + "'")
    return likes.length
}

async function removeEdit(username) {
    await db.query("DELETE FROM edits WHERE (username = '" + username + "')")
}

module.exports = {
    addEdit,
    findEdits,
    addLike,
    removeEdit
}

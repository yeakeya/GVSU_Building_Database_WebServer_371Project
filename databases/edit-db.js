const db = require("./index-db");

async function addEdit(username, likes, building) {
    await db.query("INSERT INTO edits (username, likes, name, abbreviation, description, address, yearbuilt, area, campus) VALUES ('" + username + "', '" + likes + "', '" + building.name + "', '" + building.abbreviation + "', '" + building.description + "', '" + building.address + "', " + building.yearbuilt + ", " + building.area + ", '" + building.campus + "')")
}

async function findEdits(username) {
    const result = await db.query("SELECT * FROM edits WHERE (username = '" + username + "')")
    return result.rows
}

async function allEdits() {
    const result = await db.query("SELECT * FROM edits")
    return result.rows
}

async function addLike(username, targetUser) {
    let likeList = (await findEdits(targetUser))[0].likes
    likeList.push(username)
    let numLikes = likeList.length
    likeList = likeList.toString()
    likeList = "{" + likeList + "}"
    await db.query("UPDATE edits SET likes = '" + likeList + "' WHERE username = '" + targetUser + "'")
    return numLikes
}

async function removeEdit(username) {
    await db.query("DELETE FROM edits WHERE (username = '" + username + "')")
}

module.exports = {
    addEdit,
    findEdits,
    allEdits,
    addLike,
    removeEdit
}

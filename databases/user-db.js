const db = require("./index-db");

async function findUser(username) {
    const result = await db.query("SELECT * FROM users WHERE (username == '" + username + "')")
    return result.rows[0];
}

async function addUser(username, password) {
    await db.query("INSERT INTO users (username, password) VALUES ('" + username + "', '" + password + "')")
}

module.exports = {
    findUser,
    addUser
}
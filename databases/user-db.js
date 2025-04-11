const db = require("./index-db");

async function findUser(username) {
    const result = await db.query("SELECT * FROM users WHERE (username == " + username + ")");
    return result.rows[0];
}

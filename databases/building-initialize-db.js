const db = require("./index-db");

async function createBuildings() {
    await db.query("CREATE TABLE IF NOT EXISTS buildings (name TEXT PRIMARY KEY, abbreviation TEXT NOT NULL, description TEXT NOT NULL, address TEXT NOT NULL, yearBuilt INTEGER NOT NULL, area INTEGER NOT NULL, campus TEXT NOT NULL)")
    await db.query("INSERT INTO buildings (name, abbreviation, description, address, yearBuilt, area, campus) VALUES ('Au Sable Hall', 'ASH', 'TODO.', '4045 Calder Dr.', '1975', '21200', 'Allendale')")
    await db.query("INSERT INTO buildings (name, abbreviation, description, address, yearBuilt, area, campus) VALUES ('Boathouse', 'BH', 'TODO.', 'Campus Access Dr.', '1960', '1', 'Allendale')")
    await db.query("INSERT INTO buildings (name, abbreviation, description, address, yearBuilt, area, campus) VALUES ('Bicycle Factory', 'BIK', 'TODO.', '201 Front Ave. SW', '2009', '26000', 'Pew')")
    await db.query("INSERT INTO buildings (name, abbreviation, description, address, yearBuilt, area, campus) VALUES ('DeVos Center for Interprofessional Health', 'DCIH', 'TODO.', '333 Michigan St. NE', '2021', '170000', 'Health')")
}

module.exports = {
    createBuildings
};
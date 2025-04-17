const bcrypt = require("bcrypt")

const userDB = require('../databases/user-db')

class userController {
    constructor() {
        //userDB.initialize();
    }

    async renderLogin(req, res) {
        res.render("login-page")
    }

    /* Handling Login Requests */
    async login(req, res) {
        let returnURL = req.session.returnTo
	let password = req.body.password

        /* Hashes Password w/ 10 Salt Rounds */
	let user = await userDB.findUser(req.body.username)
	if (typeof user !== 'undefined') {
	    let compare = await bcrypt.compare(req.body.password, user.password)
	    if (!compare) {
		return "Incorrect password, try again."
	    }
	} else {
	    await userDB.addUser(req.body.username, (await bcrypt.hash(password, 10)))
	}

	return new Promise((resolve, reject) => {
            req.session.regenerate((err) => {
                if (err) next(err)
                req.session.user = req.body.username
                req.session.returnTo = returnURL
                resolve(req.session.returnTo)
            })
        })    
    }

    async logout(req, res) {
        req.session.destroy(function(){
            res.redirect('/userLogin')
        })
    }
}

module.exports = userController

//const userDB = require('../database/user-db')

class userController {
    constructor() {
        //userDB.initialize();
    }

    async renderLogin(req, res) {
        res.render("login-page")
    }

    /* Handling Login Requests */
    async login(req, res) {
        if (req.body.password == "Password"/* database call with username */) {
            return new Promise((resolve, reject) => {
                req.session.regenerate((err) => {
                    if (err) next(err)
                    req.session.user = req.body.username;
                    resolve("Login successful!");
                });
            });
        } else if (true/* DB call: username is in database */) {
            return "Incorrect password, try again."
        } else {
            /* Store username and password in DB */
            req.session.regenerate((err) => {
                if (err) next(err)
                req.session.user = req.body.username
                //res.redirect(req.session.returnTo ?? '/')
            })
        }
    }

    async logout(req, res) {
        req.session.destroy(function(){
            res.redirect('/userLogin')
        })
    }
}

module.exports = userController

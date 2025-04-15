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
        /* Hashes Password w/ 10 Salt Rounds */
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
                console.error(err)
                return
            }
            console.log(hash)
        });

        let user = await userDB.findUser(username)
        if (user.username) {
            if (user.password == hash) {
                return new Promise((resolve, reject) => {
                    req.session.regenerate((err) => {
                        if (err) next(err)
                        req.session.user = req.body.username
                        resolve("Login successful!")
                    })
                })
            } else {
                return "Incorrect password, try again."
            }
        } else {
            await userDB.addUser(username, password)
            return new Promise((resolve, reject) => {
                req.session.regenerate((err) => {
                    if (err) next(err)
                    req.session.user = req.body.username
                    resolve("Login successful!")
                })
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

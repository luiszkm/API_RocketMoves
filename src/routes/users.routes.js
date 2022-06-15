const { Router} = require('express')
const userRoutes = Router()

const UserController = require("../controllers/UsersController")
const userController = new UserController()

userRoutes.post("/", userController.create)

module.exports = userRoutes
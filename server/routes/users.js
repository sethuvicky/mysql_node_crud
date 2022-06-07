const express = require("express")
const router  = express.Router()
const usercontroller = require("../controllers/userscontroller")
router.get("/",usercontroller.view)
router.get("/adduser",usercontroller.adduser)
router.post("/adduser",usercontroller.save)
router.get("/edituser/:id",usercontroller.edituser)
router.post("/edituser/:id",usercontroller.edit)
router.get("/delete/:id",usercontroller.delete)

module.exports = router
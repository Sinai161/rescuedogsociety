const router = require("express").Router()
const rescueCtrl = require("../controllers/rescueController")

router.get("/", rescueCtrl.index)
router.get("/new", rescueCtrl.new)
router.post("/", rescueCtrl.create)

module.exports = router
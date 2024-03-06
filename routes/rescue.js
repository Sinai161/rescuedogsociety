const router = require("express").Router()
const rescueCtrl = require("../controllers/rescueController")
const isAuthenticated = require("../controllers/isAuthenticated")

router.use(isAuthenticated)
router.get("/", rescueCtrl.index)
router.get("/new", rescueCtrl.new)
router.post("/", rescueCtrl.create)
router.get("/:id", rescueCtrl.show)
router.delete("/:animalId", rescueCtrl.destroy)
router.get("/:animalId/edit", rescueCtrl.edit)
router.put("/:animalId", rescueCtrl.update)

module.exports = router
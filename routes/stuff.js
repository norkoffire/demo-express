const express = require("express");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");
const Thing = require("../models/thing");

router.get("/", stuffCtrl.getAllThings);
router.get("/:id", stuffCtrl.getOneThing);
router.post("/", stuffCtrl.createThing);
router.put("/:id", stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);

module.exports = router;

const express = require("express");
const { getOne, getAll, create, update, deleteOne } = require("./controllers/users");
const router = express.Router();



router.get("/all",getAll);
router.get("/:id",getOne);
router.post("/cre",create);
router.put("/:upd",update);
router.delete("/:del",deleteOne)

module.exports = router
const express = require("express");
const { deleteOne, update, create, getAll, getOne, searchByName } = require("./controllers/products");
const router = express.Router();



router.get("/all", getAll);
router.get("/:name", searchByName);
router.get("/:id", getOne);
router.post("/cre", create);
router.put("/:upd", update);
router.delete("/:del", deleteOne)

module.exports = router
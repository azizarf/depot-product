const express = require("express");
const { create, getOne, deleteOne, update, getAll } = require("./controllers/categories");
const router = express.Router();




router.post("/cre",create)
router.get("/:id",getOne)
router.get("/all",getAll)
router.put("/:upd",update)
router.delete("/:del",deleteOne)
 

module.exports= router

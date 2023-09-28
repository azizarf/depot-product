const express = require("express");
const { create, deleteOne, update, getAll, getOne } = require("./controllers/admins");
const router = express.Router();



router.get("/all",getAll);
router.get("/:id",getOne);
router.post("/cre",create);
router.delete("/:del",deleteOne);
router.put("/:upd",update);
module.exports=router
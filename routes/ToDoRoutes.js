const { Router } = require("express");

const router = Router();

const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

router.get("/get-todo",getToDo);
router.post("/save-todo",saveToDo);
router.post("/delete-todo",deleteToDo);
router.post("/update-todo",updateToDo);

module.exports = router;
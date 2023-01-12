const express = require("express");
const { readTodos, createTodos, updateTodo, deleteTodo } = require("../controller/todos");

const router = express.Router();
router.get('/', readTodos)
router.post('/', createTodos)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router;

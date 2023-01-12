const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.use(cors());

const db = require("./db.js")

const todosRoutes = require("./routes/todos")

app.use('/todos', todosRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to To-Do App")
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))




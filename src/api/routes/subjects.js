const { postSubjects, deleteSubjects } = require("../controllers/subjects")
const subjectRouter = require("express").Router()

subjectRouter.post("/", postSubjects)
subjectRouter.delete("/:id", deleteSubjects)

module.exports = subjectRouter
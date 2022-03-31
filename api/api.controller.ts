import express, {Request, Response, Router} from "express";

const NotesRouter = require("./notes/notes.controller")
const ProjectsController = require("./projects/projects.controller")
const TagsController = require("./tags/tags.controller")

const router: Router = express.Router();

router.use("/notes", NotesRouter)
router.use("/projects", ProjectsController);
router.use("/tags", TagsController);

module.exports = router
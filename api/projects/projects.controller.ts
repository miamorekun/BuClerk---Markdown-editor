import express, {Request, Response, Router} from "express";
import {projects} from "../notes/notes.entities";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    setTimeout(() => {
        res.json(projects)
    }, 400)
})

module.exports = router
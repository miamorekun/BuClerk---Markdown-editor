import express, {Request, Response, Router} from "express";
import {tags} from "../notes/notes.entities";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    setTimeout(() => {
        res.json(tags)
    }, 400)
})

module.exports = router
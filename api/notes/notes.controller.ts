import express, {Request, Response, Router} from "express";
import faker from "@faker-js/faker";
import {randomFullNote, randomNote} from "./notes.service";
import {NotePreview} from "./notes.model";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    const data: NotePreview[] = []

    for (let i = 0; i < faker.datatype.number({min: 4, max: 12}); i++) {
        data.push(randomNote())
    }

    setTimeout(() => {
        res.json(data)
    }, 400)
})

router.get("/:todoId", (req: Request, res: Response) => {
    setTimeout(() => {
        res.json(randomFullNote(req.params.todoId))
    }, 400)
})

module.exports = router
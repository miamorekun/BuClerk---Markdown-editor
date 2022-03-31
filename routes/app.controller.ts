const ApiRouter = require("../api/api.controller")

// @ts-ignore
import express, {Request, Response, NextFunction, Router} from 'express';
import path from "path";

const router: Router = express.Router();
// const __distDirectory = path.resolve('dist')

router.get("/", (req: Request, res: Response) => {
    res.send("Hello world!")
})

router.use("/api/v1", ApiRouter)

module.exports = router
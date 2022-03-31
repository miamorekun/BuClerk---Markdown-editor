require('dotenv').config()

import path from "path"
import express from "express"

const AppRouter = require("./routes/app.controller")
const app = express();
const cors = require('cors')

// Init path to static app files if we are in production mode
if (process.env.mode === "production") {
    console.log(path.join(__dirname, "./client/public"))
    app.use(express.static(path.join(__dirname, "./client/public")));
}

// Init CORS
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

// Init middlewares for parsing content
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

// Init App Router

app.use("/", AppRouter)

// Run node server
const port: string | number = process.env.BACKEND_SERVER_PORT || 8000
const server = app.listen(port, function () {
    console.log(`Node.js server has been started on localhost:${port}`);
});
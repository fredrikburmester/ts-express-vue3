// Import express
import express from "express"

// Import everything for ENVs
import dotenv from "dotenv"
import bodyParser from "body-parser"

import * as home from "./controllers/home.controller"

import cors from "cors"
import { createServer } from "http"
import { Server } from "socket.io"

// ENV Variables
dotenv.config()

// Set app things
const app = express()
app.use(cors({ origin: "*" }))
app.set("port", process.env.SERVER_PORT || 3000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", home.index)

// Create http server
const httpServer = createServer(app)

const io = new Server(httpServer)

io.on("connection", () => {
  console.log("[Server] Sockets Connected")
})

httpServer.listen(3000)

export default app

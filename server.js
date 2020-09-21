const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const authRouter = require("./auth/auth-router")
const restricted = require("./auth/restricted-middleware")
const strainsRouter = require("./router/strains-router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(
    cors({
        origin: "*",
        credentials: true,
    })
)

server.use("/api/auth", authRouter)
server.use("/api/strains", restricted, strainsRouter)

server.get("/", (req, res) => {
    res.status(200).json({ Victor_Frankenstein: "It LIVEEEESSSSSSS" })
})

module.exports = server;
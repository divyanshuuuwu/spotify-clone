const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.route.js")
const musicRoutes = require("./routes/music.routes.js")

const app = express()
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/music", musicRoutes)







module.exports=app




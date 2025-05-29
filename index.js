import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()
import router from "./routes/routes.js"

app.use("/api/v1", router)


app.listen(process.env.PORT, () => {
    console.log(`Server is ready on port ${process.env.PORT}`)
})
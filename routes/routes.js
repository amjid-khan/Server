import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to home page")
})

router.get("/about", (req, res) => {
    res.send("This is about page")
})

router.get("/contact", (req, res) => {
    res.send("My Contact Num : 0311-9091924")
})


export default router
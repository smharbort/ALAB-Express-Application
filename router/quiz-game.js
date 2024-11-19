// "import" express and create an instance of the Router class
const express = require("express")
const router = express.Router()

const values1 = {
    title: "Steven's Geography Quiz Game",
    question: "What is the capital of Slovenia?",
    answers: {
        one: "Vienna",
        two: "Ljubljana",
        three: "Warsaw",
        four: "Marseilles"
    }
}
const values2 = {
    title: "Steven's Geography Quiz Game",
    question: "On which continent is the country Angola",
    answers: {
        one: "Asia",
        two: "Europe",
        three: "Australia",
        four: "Africa"
    }
}

// routes/quiz-game
router
    .route("/:q_num")
    .get((req, res) => {
        console.log(req.params)

        if (req.params.q_num <= 500) {
            res.render("quiz-game", values1)
        } else {
            res.render("quiz-game", values2)
        }
    })
    .post((req, res) => {
        console.log(req.body.input)    
        res.send(`You submitted: ${req.body.input}`)
    })
router
    .route("/:q_num/download")
    .get((req, res) => {
        res.download("assets/notes-master-the-coding-interview-1.jpg", "pretty-cool-coding-image-huh.jpg")
    })

module.exports = router;
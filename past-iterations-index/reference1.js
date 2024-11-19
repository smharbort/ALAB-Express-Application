/* const express = require("express")
const app = express()
const port = 3000

app.use(express.static("./styles"))

const fs = require("fs")

app.engine("geoQuiz", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)

        const rNum = Math.floor(Math.random() * 3)

        const rendered = content
            .toString()
            .replaceAll("#title#", `Steven's ${options[rNum].quiz_type} Quiz Game`)
            .replace("#question#", `${options[rNum].question}`)
            .replace("#option1#", `${options[rNum].answers.one}`)
            .replace("#option2#", `${options[rNum].answers.two}`)
            .replace("#option3#", `${options[rNum].answers.three}`)
            .replace("#option4#", `${options[rNum].answers.four}`)
        return callback(null, rendered)
    })
})

app.set("views", "./views")
app.set("view engine", "geoQuiz")

app.get("/", (req, res) => {
   const options = [
        {
            quiz_type: "Coding",
            question: "What is the capital of Austria",
            answers: {
                one: "Warsaw",
                two: "Vienna",
                three: "Ljubljana",
                four: "Marseilles"
            }
        },
        {
            quiz_type: "Geography",
            question: "Which US state does NOT share a border with Georgia",
            answers: {
                one: "Alabama",
                two: "South Carolina",
                three: "Oklahoma",
                four: "Tennessee"
            }
        },
        {
            quiz_type: "Geography",
            question: "On which continent is the country Angola",
            answers: {
                one: "South America",
                two: "Asia",
                three: "Africa",
                four: "Europe"
            }
        }
   ]

    res.render("index", options)
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
}) */
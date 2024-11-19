// BASIC SERVER STRUCTURE
// 1. require("express") is basically importing the downloaded express package
const express = require("express")
// 2. next we create an instance of express to act on this base file
const app = express()
// 3. specify request parser tools that allows us to interact with the meat & bones of the request object sent by clients
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// example of req.params used and very basic middleware
const logReq = function (req, res, next) {
    console.log(`serving a new quiz page!`)
    next()
}
app.use("/quiz-game/:q_num", logReq)

// 4. link this base file to the routes folder to delegate requests according to their respective url paths
const quizGame = require("./router/quiz-game")
app.use("/quiz-game", quizGame)
// 5. linking the "views" folder to be able to render pages according to our template pages --> using the Pug engine we have downloaded --> also linking them with respective CSS files
app.set("views", "./views")
app.set("view engine", "pug")
app.use(express.static("./styles"))

//  Handle the main page's content by receiving URL GET requests and sending the home page as a response
app.get("/", (req, res) => {
    res.render("index", {})
})

// 6. Listen on this port for http requests (localhost for now)
const port = 3000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
})
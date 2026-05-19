import express from 'express'
import { user } from './controllers/userController.js';
const app = express();

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
   res.render('home',{name: 'Anil Sidhu', ytChannel: 'Code Step By Step'})
})

app.get("/add-user", (req, res) => {
    res.render('addUser')
})

app.post("/submit-user", (req, res) => {
    console.log(req.body)
     res.render('submitUser', req.body)
})

app.get("/users", (req, res) => {
    const users = [
        'suleman', "dawood", 'nasir', 'touseef', 'zohaib', 'hamza', 'kashif', 'altaf', 'arslan', 'usama'
    ]
res.render('users', {users})
})


app.get("/users2", user)

app.listen(3002)
import express from 'express'
import { user } from './controllers/userController.js';
const app = express();
import usersData from './users.json' with {type:'json'}
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
f
app.get("/", (req, res) => {
    console.log("usersData",usersData)
 res.send(usersData)
})

app.get("/user/:id", (req, res) => {
    let filteredData = usersData.filter((user, index) => {
        console.log(typeof req.params.id)
        console.log("userid",typeof user.id)
        return user.id == req.params.id
    })
    if(!filteredData.length>0){
        res.send("No Data Found")
    }
    // console.log(filteredData)
    res.send(`Welcome ${filteredData[0].name}`)
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
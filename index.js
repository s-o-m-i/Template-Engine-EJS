import express from 'express'
const app = express();


app.set('view engine', 'ejs')

app.get("/", (req, res) => {
   res.render('home',{name: 'Anil Sidhu', ytChannel: 'Code Step By Step'})
})

app.listen(3002)
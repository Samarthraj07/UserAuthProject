require('dotenv').config()
const express = require("express")
const { render } = require("express/lib/response")
const mongoose = require("mongoose")
const routes = require('./routes/routes')
const cookieParser = require('cookie-parser')
const { requireAuth } = require('./Middleware/authmiddleware')
const port = process.env.PORT || 3000


const app = express()

app.use(express.json())


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(cookieParser())

const URL = process.env.MongoURL 

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
}).then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/", (req, res) =>{
    res.render('home')
})

app.get('/protected', requireAuth, (req, res)=>{
    res.render('protected')
})

app.use(routes)




const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//Inicialitations
const app = express()
require('./database')

//settings
app.set('port', process.env.port || 3000)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//static resourses
app.use(express.static(__dirname + '/public'))

//routes
app.get('/', (req,res)=>{
    res.render("./src/public/index")
})

app.use(require('./routes/gems'))

//exports
module.exports = app
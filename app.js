const express = require('express')

const app = express()

const port = 3000

//?RUTA
const mainRoutes = require("./routers/other.routes")

app.use(express.static('public'))

//!EJS
app.set('view engine', 'ejs')

//*ENRUTAMIENTO
app.use('/', mainRoutes)

app.use('/about', mainRoutes)

app.use('/index', mainRoutes)

app.listen(port,() => console.log(`http://localhost:${port}`))
const express = require('express')

const app = express()

const port = 3000

const mainRoutes = require("./routers/other.routes")

app.use(express.static('public'))

app.use('/', mainRoutes)

app.use('/about', mainRoutes)


app.listen(port,() => console.log(`http://localhost:${port}`))
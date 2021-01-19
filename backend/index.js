const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()

// routes
const eventRoutes = require("./routes/event")

// app
const app = express()

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(() => console.log('DB Connected'))

// middlewares
app.use(bodyParser.json())
app.use(cors())

// routes middleware
app.use("/api", eventRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})
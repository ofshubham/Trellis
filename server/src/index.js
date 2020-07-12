const express = require('express')
/* eslint-disable-next-line no-unused-vars */
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const { notFoundHandler, errorHandler } = require('./middleware')

require('dotenv').config()

const app = express()
const PORT = 8080 || process.env.PORT

app.use(morgan('tiny'))
app.use(helmet())
// app.use(cors({
//     origin: process.env.CORS_URL,
// }))

app.get('/', (req, res) => {
    res.json({
        message: 'success',
        staus: res.statusCode
    })
})

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

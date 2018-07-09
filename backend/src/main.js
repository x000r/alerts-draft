const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 3000

const app = express()

// CORS options
let corsOptions = {
    origin: 'http://localhost:8080',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

require ('./routes.js')(app)

app.use(bodyParser.json())
app.use(morgan('tiny'))


app.listen(PORT, ()=>{
    console.log('Listening on port %d', PORT)
})
const express = require('express')
const app = express()
const cors = require('cors')
const suratEndpoint = require('./routes/surat')

require('dotenv').config()
const port = 3500 


app.use(cors(
    // {
    // origin: 'http://192.168.1.22:3000'
    // }
))
app.use(express.json())


const sequelize = require('./configdb')
sequelize.sync().then(() => console.log('database ready'))

app.use('/surat', suratEndpoint)

app.listen(port, () => console.log('Server running on port 3500'))
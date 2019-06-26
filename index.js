//CONTACT MANAGER APP

const express = require('express')
const cors = require('cors')
const mongoose = require('./config/database')
const app = express()
const port = 3007
const {contactRouter} = require('./app/components/contactController')
const {userRouter} = require('./app/components/userController')



app.use(express.json())
app.use(cors())

app.use('/contacts', contactRouter)
app.use('/users', userRouter)


app.get('/', (req,res) => {
    res.send('welcome to the contact manager app')    
})

app.listen(port, () => {
    console.log('listening on the port',port)
})

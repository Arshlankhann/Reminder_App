const express = require('express');
const mongoose = require('mongoose')
const reminderRoutes = require('./routers/reminders')
const app = express()

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/reminder_app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Mongodb connected'))
.catch(err => console,log(err))

app.use('/api/reminders', reminderRoutes)


const PORT = process.env.PORT  || 5000
app.listen(PORT, () =>{
    console.log('Server is running on Port', PORT)
})
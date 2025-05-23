const express = require('express')
const router = express.Router()
const Reminder = require('../models/Reminder')


router.post('/', async(res,req)=>{
    try{
        const {date, time, message, method } = req.body;
        if(!date || !time || !message || !method){
            return res.status(400).json({error: 'All Fields are required'})
        }
        const dateTime = new Date(`${date}T${time}`)
        const reminder = new Reminder({
            dateTime,
            message,
            methods: method
        })
        await reminder.save()
        res.status(201).json({
            message: 'Reminder Created Successfully',reminder})
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'server error'})
    }
})
module.exports = router;
const mongoose = require('mongoose')

const URL = 'mongodb+srv://moxiedb:12345@cluster0.p0lvm.mongodb.net/POSApplication'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error', ()=>{
    console.log('Mongo DB Connection Failed')
})
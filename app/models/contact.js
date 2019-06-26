const mongoose = require('mongoose')

//Schema 

const Schema = mongoose.Schema

const ContactSchema = new Schema({
    //field: {configuration}

    name:{
        type:String,
        required: true
    },
    phoneNo:{
        type: Number,
        required: true
    },
    email:{
        type: String
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Contact = mongoose.model('Contact', ContactSchema)

module.exports = Contact
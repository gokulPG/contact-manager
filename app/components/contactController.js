const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
const { authenticationUser } = require('../middlewares/authentication')

// contacts

router.get('/', authenticationUser, (req,res) => {
        const {user} = req
        Contact.find({
        user:user._id   
        })
        .then((contacts) => {
            if(!contacts){
                res.json([])
            }
            res.json(contacts)
           })
       .catch((err) => {
                res.json(err)
        })
})

router.post('/', authenticationUser, (req,res) => {
    const {user} = req
    const body = req.body
    const contact = new Contact(body)
    contact.user = user._id
    contact.save()
        .then((contact) => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
})

router.get('/:id', authenticationUser, (req,res) => {
    const { user } = req
    const id = req.params.id
    Contact.findOne({
        _id: id,
        user: user._id
        })
        .then((contact) => {
            if(!contact){
                res.json({})
            }
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
})

router.put('/:id',authenticationUser, (req,res) => {
    const {user} = req
    const id = req.params.id
    const body = req.body
        Contact.findOneAndUpdate({
            _id: id,
            user: user._id
        } , { $set: body }, { new: true })
                .then((contact) => {
                    if(!contact){
                        res.json({})
                    }
                    res.json(contact)
                })
                .catch((err) => {
                    res.json(err)
                })
})

router.delete('/:id', authenticationUser, (req,res) => {
    const {user} = req
    const id = req.params.id
        Contact.findOneAndDelete({
            _id: id,
            user: user._id
        })
        .then((contact) => {
                if(!contact){
                    res.json({})
                }
                res.json(contact)
            })
            .catch((err) => {
                res.json(err)
            })
            
})

module.exports = {
    contactRouter:router
}
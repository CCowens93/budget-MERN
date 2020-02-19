const express = require('express')

const savingsAPI = require('../models/savings.js')

const savingsRouter = express.Router()


//getAll

savingsRouter.get('/', (req, res) => {
    savingsAPI.getAllSavings()
    .then((allSavings) => {
        res.json(allSavings)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//getOne

savingsRouter.get('/:savingsId', (req, res) => {
    savingsAPI.getOneSavings(req.params.savingsId)
    .then((oneSavings) => {
        res.json(oneSavings)
    })

    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//create

savingsRouter.post('/', (req, res) => {
    savingsAPI.createSavings(req.body)
    .then(() => {
        res.json("created")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//delete

savingsRouter.delete('/:savingsId', (req, res) => {
    savingsAPI.deleteSavings(req.params.id)
    .then(() => [
        res.json("deleted")
    ])
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})
    
module.exports = {
        savingsRouter
}
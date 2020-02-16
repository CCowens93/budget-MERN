const express = require('express')

const incomeAPI = require('../models/income.js')

const incomeRouter = express.Router()


//getAll

incomeRouter.get('/', (req, res) => {
    incomeAPI.getAllIncome()
    .then((allIncome) => {
        res.json(allIncome)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//getOne

incomeRouter.get('/:incomeId', (req, res) => {
    incomeAPI.getOneIncome(req.params.incomeId)
    .then((oneIncome) => {
        res.json(oneIncome)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//create

incomeRouter.post('/', (req, res) => {
    incomeAPI.createIncome(req.body)
    .then(() => {
        res.json("created")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//delete

incomeRouter.delete('/:incomeId', (req, res) => {
    incomeAPI.deleteIncome(req.params.id)
    .then(() => {
        res.json("deleted")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

module.exports = {
    incomeRouter
}
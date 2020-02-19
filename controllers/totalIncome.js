const express = require('express')

const totalIncomeAPI = require('../models/totalIncome.js')

const totalIncomeRouter = express.Router()

//getAll

totalIncomeRouter.get('/', (req, res) => {
    totalIncomeAPI.getAllTotal()
    .then((allTotal) => {
        res.json(allTotal)
    })

    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//getOne

totalIncomeRouter.get('/:totalId', (req, res) => {
    totalIncomeAPI.getOneTotal(req.params.totalId)
    .then((oneTotal) => {
        res.json(oneTotal)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//create

totalIncomeRouter.post('/', (req, res) => {
    totalIncomeAPI.createTotal(req.body)
    .then(() => {
        res.json("created")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//delete

totalIncomeRouter.delete('/:totalId', (req, res) => {
    totalIncomeAPI.deleteTotal(req.params.id)
    .then(() => {
        res.json("deleted")
    })

    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

module.exports = {
    totalIncomeRouter
}
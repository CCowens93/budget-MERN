const express = require('express')

const expenseAPI = require('../models/expenses.js')

const expenseRouter = express.Router()


//getAll

expenseRouter.get('/', (req, res) => {
    expenseAPI.getAllExpense()
    .then((allExpense) => {
        res.json(allExpense)
    })

    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//getOne

expenseRouter.get('/:expenseId', (req, res) => {
    expenseAPI.getOneExpense(req.params.expenseId)
    .then((oneExpense) => {
        res.json(oneExpense)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//create

expenseRouter.post('/', (req, res) => {
    expenseAPI.createExpense(req.body)
    .then(() => {
        res.json("created")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//delete

expenseRouter.delete('/:expenseId', (req, res) => {
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
    expenseRouter
}
const mongoose = require('./connection.js')

const ExpenseSchema = new mongoose.Schema({
    expense: String,
    cost: Number
})

const ExpenseCollection = mongoose.model('Expense', ExpenseSchema)

//getAll

const getAllExpense = () => {
    return ExpenseCollection.find()
}

//getOne

const getOneExpense = (expenseId) => {
    return ExpenseCollection.findById(expenseId)
}

//create

const createExpense = (newExpense) => {
    return ExpenseCollection.create(newExpense)
}

//delete

const deleteExpense = (expenseId) => {
    return ExpenseCollection.delete(expenseId)
}

module.exports = {
    getAllExpense,
    getOneExpense,
    createExpense,
    deleteExpense
}
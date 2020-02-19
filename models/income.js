const mongoose = require('./connection.js')

const IncomeSchema = new mongoose.Schema({
    career: String,
    total: Number,
    month: String,
    monthlyIncome: Number,
})

const IncomeCollection = mongoose.model('Income', IncomeSchema)

//getAll

const getAllIncome = () => {
    return IncomeCollection.find()
}

//getOne

const getOneIncome = (incomeId) => {
    return IncomeCollection.findById(incomeId)
}

//create

const createIncome = (newIncome) => {
    return IncomeCollection.create(newIncome)
}

//delete

const deleteIncome = (incomeId) => {
    return IncomeCollection.delete({_id: incomeId})
}

module.exports = {
    getAllIncome,
    getOneIncome,
    createIncome,
    deleteIncome
}
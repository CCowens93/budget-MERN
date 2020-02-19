const mongoose = require('./connection.js')

const TotalIncomeSchema = new mongoose.Schema({
    total: Number
})

const TotalIncomeCollection = mongoose.model('TotalIncome', TotalIncomeSchema)

//getAll

const getAllTotal = () => {
    return TotalIncomeCollection.find()
}

//getOne

const getOneTotal = (totalId) => {
    return TotalIncomeCollection.findById(totalId)
}

//create

const createTotal = (newTotal) => {
    return TotalIncomeCollection.create(newTotal)
}

//delete

const deleteTotal = (totalId) => {
    return TotalIncomeCollection.deleteMany({_id: totalId})
}

module.exports = {
    getAllTotal,
    getOneTotal,
    createTotal, 
    deleteTotal
}
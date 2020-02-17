// const mongoose = require('./connections.js')

// const SavingsSchema = new mongoose.Schema({
//     savings: Number
// })

// const SavingsCollection = mongoose.model('Savings', SavingsSchema)


// //getAll

// const getAllSavings = () => {
//     return SavingsCollection.find()
// }

// //getOne

// const getOneSavings = (savingsId) => {
//     return SavingsCollection.findById(savingsId)
// }

// //create

// const createSavings = (newSavings) => {
//     return SavingsCollection.create(newSavings)
// }

// const deleteSavings = (savingsId) => {
//     return SavingsCollection.delete(savingsId)
// }

// module.exports = {
//     getAllSavings, 
//     getOneSavings,
//     createSavings,
//     deleteSavings
// }
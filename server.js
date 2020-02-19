const express = require('express')
const app = express()

const { incomeRouter } = require('./controllers/income.js')
const { expenseRouter } = require('./controllers/expenses.js')
const { savingsRouter } = require('./controllers/savings.js')



app.use(express.urlencoded({extended: true}))


app.use(express.json())



app.use(express.static(`${__dirname}/client/build`))



app.use('/api/income', incomeRouter)
app.use('/api/expense', expenseRouter)
app.use('/api/savings', savingsRouter)





app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
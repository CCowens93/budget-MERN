import React, { Component } from 'react';

import Savings from './savings.js'

import axios from 'axios';


class expense extends Component {

    state = {
        expenseList: [{
            expense: '',
            cost: '',
            resetOnSubmit: false
        }]
       
    }


    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const newState = { ...this.state }
        newState[name] = value;
        this.setState(newState)

    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/expense', this.state)
    }

    deleteSubmit = (event) => {
        event.preventDefault()
        axios.delete('/api/expense/{this.state.id}')
            .then(res => console.log(res.data))
    }

    componentDidMount() {
        axios.get('/api/expense')
            .then((res) => {
                this.setState({
                    expenseList: res.data,


                })
            })
    }



    render() {
        console.log('From render()', this.state)


        const expenseTable = this.state.expenseList.map((expenseList, i) => (
                <tr key={i}>
                <td width={300} height={20}>{expenseList.expense} </td>
                <td width={300} height={20}>${expenseList.cost}</td>

            </tr>
        ))

        // const expenseTable = this.state.expenseList.map((expenseList, i) => {
        //     return <Savings
        //         key={i}
        //         expense={expenseList.expense}
        //         cost={expenseList.cost}
            
        //     />
        // })

        let total = 0

        const x = this.state.expenseList

        for(let i = 0; i < x.length; i ++){
            total = total + x[i].cost
        }



        return (
            <div className="chartWrapper">
                <h2>List your monthly expenses and the amount they cost below </h2>
            <div className="savingsWrapper">
                <div className="savings">
                    <p>Total Expenses: ${total}</p>
                </div>
                </div>
                <div className="wrapper">



                    <div className="expenseTable">

                        <table>
                            <thead>
                                <tr>
                                    <th width={300} height={50}>Expense</th>
                                    <th width={300} height={50}>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenseTable}
                            </tbody>
                        </table>

                    </div>

                    <div className="expenseForm">
                        <form onSubmit={this.handleSubmit}>
                            <select
                                name="expense"
                                value={this.state.expense}
                                onChange={this.changeHandler}>
                                <option value="" disabled hidden>Expenses</option>
                                <option value="Rent/Mortgage">Rent/Mortgage</option>
                                <option value="Childcare">Childcare</option>
                                <option value="Car Note">Car Note</option>
                                <option value="Car Insurance">Car Insurance</option>
                                <option value="Health Insurance">Health Insurance</option>
                                <option value="Life Insurance">Life Insurance</option>
                                <option value="Medications">Medications</option>
                                <option value="Electricity Utility">Electricity Utility</option>
                                <option value="Gas Utility">Gas Utility</option>
                                <option value="Phone Bill">Phone Bill</option>

                            </select>
                            <br></br>
                            <input
                                name="cost"
                                type="number"
                                placeholder="Cost"
                                value={this.state.cost}
                                onChange={this.changeHandler}
                            />
                            <br></br>
                            <input
                                type="submit"
                                value="Submit"
                                onChange={this.toggleShow}
                            />

                        </form>

                    </div>


                </div>
            </div>
        )
    }
}

export default expense
import React, { Component } from 'react';

import axios from 'axios';


class expense extends Component {

    state = {
        expense: '',
        cost: '',
        resetOnSubmit: false,
        expenseList: [],
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

    componentDidMount() {
        axios.get('/api/expense')
            .then((res) => {
                this.setState({ expenseList: res.data })
            })
    }



    render() {
        console.log('From render()', this.state)


        return (
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
                            {this.state.expenseList.map((expenseList, i) => (
                                <tr key={i}>
                                    <td width={300} height={20}>{expenseList.expense}</td>
                                    <td width={300} height={20}>${expenseList.cost}</td>
                                </tr>
                            ))}
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
                        />
                    </form>
                </div>

            </div>
        )
    }
}

export default expense
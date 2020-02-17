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

    deleteButton() {
        axios.delete('/api/expense/:expenseId')
            .then(() => {

            })
    }

    oneExpense() {
        axios.get('/api/expense/:expenseId')
            .then((res) => {
                this.setState({ expenseList: res.data })
            })
    }

    resetHandler() {
        axios.get('/api/expense')
            .then(() => {
                this.setState({ resetOnSubmit: !false })
            })
    }


    render() {
        console.log('From render()', this.state)


        return (
            <div className="expenseForm">

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




                <form onSubmit={this.handleSubmit}>
                    <select

                        name="expense"
                        value={this.state.expense}
                        onChange={this.changeHandler}>
                        <option value="Rent/Mortgage">Rent/Mortgage</option>
                        <option value="Childcare">Childcare</option>
                        <option value=""></option>

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
        )
    }
}

export default expense
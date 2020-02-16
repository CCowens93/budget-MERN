import React, { Component } from 'react';

import axios from 'axios';

class expense extends Component {

    state = {
        expense:'',
        cost:'',
        expenseList:[]
    }

    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const newState = {...this.state}
        newState[name] = value;
        this.setState(newState)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/expense', this.state)
    }

    componentDidMount(){
        axios.get('/api/expense')
        .then((res) => {
            this.setState({expenseList: res.data})
        })
    }

    render(){
        console.log('From render()', this.state)

        const newExpenseList = this.state.expenseList;

        const expenseComponent = newExpenseList.map((expenseList, i) => {
            return(
                <div key={i}>
                    <p>{expenseList.expense}</p>
                    <p>{expenseList.cost}</p>
                </div>
            )
        })

        return(
            <div>
                {expenseComponent}

                <form onSubmit={this.handleSubmit}>
                    <input
                    name="expense"
                    type="text"
                    placeholder="Name of Expense"
                    value={this.state.expense}
                    onChange={this.changeHandler}
                    />
                    <br></br>
                    <input
                    name="cost"
                    type="number"
                    placeholder="Cost of Expense"
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
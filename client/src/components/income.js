import React, { Component } from 'react';

import axios from 'axios';

class income extends Component {

    state = {
        career:'',
        month:'',
        monthlyIncome:'',
        incomeList:[]
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
        axios.post('/api/income', this.state)
    }

    componentDidMount() {
        axios.get('/api/income')
        .then((res) => {
            this.setState({incomeList: res.data})
        })
    }

    render(){
        console.log('From render()', this.state)

        const newIncomeList = this.state.incomeList;

        const currencyComponents = newIncomeList.map((incomeList, i) => {
            return(
                <div className="income" key={i}>
                    <p>Place of work: {incomeList.career}</p>
                    <p>Current month: {incomeList.month}</p>
                    <p>Monthly income: ${incomeList.monthlyIncome}</p>
                </div>
            )
        })

        return(
            <div className="form">
                {currencyComponents}

          

                <form onSubmit={this.handleSubmit}>
                <input
                name="career"
                type="text"
                placeholder="Career"
                value={this.state.career}
                onChange={this.changeHandler}
                />
                <br></br>
                <input
                name="month"
                type="text"
                placeholder="Month"
                value={this.state.month}
                onChange={this.changeHandler}
                />
                <br></br>
                <input
                name="monthlyIncome"
                type="number"
                placeholder="Monthly Income"
                value={this.state.monthlyIncome}
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

export default income
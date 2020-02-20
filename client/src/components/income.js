import React, { Component } from 'react';

// import TotalMonthlyIncome from './totalIncome.js';

import axios from 'axios';

class income extends Component {

    state = {
        incomeList: [{
        career: '',
        month: '',
        monthlyIncome: ''
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
        axios.post('/api/income', this.state)
    }

    componentDidMount() {
        axios.get('/api/income')
            .then((res) => {
                this.setState({ incomeList: res.data })
            })
    }



    render() {
        console.log('From render()', this.state)


        const incomeTable = this.state.incomeList.map((incomeList, i, v) => (
            <tr key={i} value={v}>
                
                <td width={300} height={20}>{incomeList.career}</td>
                {/* <td width={300} height={20}>{incomeList.month}</td> */}
                <td width={300} height={20}>${incomeList.monthlyIncome}</td>

            </tr>
        ))

       
        let total = 0

        const x = this.state.incomeList

        for(let i = 0; i < x.length; i ++){
            total = total + x[i].monthlyIncome
        }

        

        


        return (
            <div className="totalWrapper">
                <div className="total">
                    <p>Total Income: ${total}</p>
                </div>
                <div className="wrapper">




                    <div className="incomeTable">
                        <table>
                            <thead>
                                <tr>
                                    <th width={300} height={50}>Source</th>
                                    {/* <th width={300} height={50}>Month</th> */}
                                    <th width={300} height={50}>Income</th>

                                </tr>

                            </thead>
                            <tbody>
                                {incomeTable}
                            </tbody>
                        </table>
                    </div>
                    <div className="incomeForm">
                        <form onSubmit={this.handleSubmit}>
                            <input

                                name="career"
                                type="text"
                                placeholder="Source of Income"
                                value={this.state.career}
                                onChange={this.changeHandler}
                            />
                            {/* <br></br>

                    <select

                        name="month"
                        value={this.state.month}
                        onChange={this.changeHandler}>

                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>


                    </select> */}
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

                </div>
            </div>

        )
    }

}

export default income
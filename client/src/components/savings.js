import React, { Component } from 'react'

// import Expenses from './expenses.js'

import axios from 'axios'


class savings extends Component{

    state = {
        savings:'',
        savingsList:[]
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
        axios.post('/api/savings', this.state)
    }

    componentDidMount() {
        axios.get('/api/savings')
            .then((res) => {
                this.setState({ savingsList: res.data })
            })
    }

    render(){
        console.log('From render()', this.state)

        return(
            <div className="savings">
               <tr>
            <td>{this.props.expense}</td>
            <td>{this.props.cost}</td>
            </tr>
            
               
               
            </div>
        )
    }

}

export default savings
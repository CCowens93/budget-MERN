import React, { Component } from 'react'

import Income from './income.js';

import axios from 'axios';


class totalIncome extends Component {

    state ={
        total: '',
        totalList: []
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
        axios.post('/api/totalIncome', this.state)
    }

    componentDidMount() {
        axios.get('/api/totalIncome')
        .then((res) => {
            this.setState({totalList: res.data })
        })
    }
    

    render() {
        
       
        

      
        return (
            <div className="totalMonthlyIncome">


                

            </div>
        )
    }
}

export default totalIncome
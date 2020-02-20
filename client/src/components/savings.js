import React, { Component } from 'react'

// import Expenses from './expenses.js'

import axios from 'axios'


class savings extends Component{

    state = {
        savings:'',
        savingsList:[]
    }


   

    render(){
        

        return(
            <div className="savings">
               <tr>
            <td width={300} height={20}>{this.props.expense}</td>
            <td width={300} height={20}>{this.props.cost}</td>
            </tr>
            
               
               
            </div>
        )
    }

}

export default savings
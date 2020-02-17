import React, { Component } from 'react'


class practice extends Component{

    state = {
        resetButton: false
    }

   

    render(){

       
        return(
            <div>
                <p>{this.state.resetButton}</p>
            </div>
        )
    }
}

export default practice
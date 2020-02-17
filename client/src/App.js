import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Income from './components/income.js'
import Expense from './components/expenses.js'
// import Savings from './components/savings.js'


class home extends Component {

  state= {
    name: 'CASEY AKA EXCELLENCE'
  }

  render(){
  return (
    <div className="App">
      <h1>BUDGET FOR {this.state.name}</h1>
      <div className="routes">
      <Router>
        <Switch>
          
          <Route exact path="/" component={Income}/>
          
        </Switch>
 
        <Switch>
          
          <Route path="/" component={Expense}/>
          
        </Switch>

        {/* <Switch>
          <Route path="/" component={Savings}/>
        </Switch> */}

       
      </Router>
      </div>
    </div>
  );
}
}
export default home;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Income from './components/income.js'
import Expense from './components/expenses.js'




class home extends Component {

 

  render() {
    return (
      <div className="App">
        <h1>BUDGET APP</h1>
        
        <div className="routes">
          <Router>

          
            <Switch>
              

              <Route exact path="/" component={Income} />

            </Switch>

            <Switch>
              
              <Route path="/" component={Expense} />

            </Switch>
          </Router>
        </div>
       

      </div>
    );
  }
}
export default home;

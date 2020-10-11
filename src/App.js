import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className="App ">
     <Router>
       <Switch>
       <Route path="/appointment">
           <Appointment/>
         </Route>

         <Route path="/dashboard/appointment">
           <Dashboard/>
         </Route>

         <Route exact path="/">
            <Home />
         </Route>
         
       </Switch>
     </Router>
    </div>
  );
}

export default App;

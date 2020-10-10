import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className="App ">
     <Router>
       <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route path="/appointment">
           <Appointment/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

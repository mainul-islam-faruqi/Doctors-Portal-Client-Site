import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddDoctor from './components/AddDoctor/AddDoctor';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
       <Switch>
       <Route path="/appointment">
           <Appointment/>
         </Route>

         <Route path="/dashboard">
           <Dashboard/>
         </Route>

         <Route path="/addDoctor">
           <AddDoctor />
         </Route>

         <Route path="/login">
           <Login/>
         </Route>

         <Route exact path="/">
            <Home />
         </Route>
         
       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;

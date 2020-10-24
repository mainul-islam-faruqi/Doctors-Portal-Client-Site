import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddDoctor from './components/AddDoctor/AddDoctor';
import Appointment from './components/Appointment/Appointment/Appointment';
import DashboardAppointment from './components/Dashboard/DashboardAppointment/DashboardAppointment';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

import jwt_decode from "jwt-decode"
import { useEffect } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});



useEffect(()=> {

    const token = sessionStorage.getItem('token');
    if(token){
      const decodedToken = jwt_decode(token);
      // console.log(decodedToken.email);
      setLoggedInUser({...loggedInUser,email:decodedToken.email});
    }
    

},[])



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

         <PrivateRoute path="/dashboard-appointment">
           <DashboardAppointment/>
         </PrivateRoute>

         <PrivateRoute path="/addDoctor">
           <AddDoctor />
         </PrivateRoute>

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

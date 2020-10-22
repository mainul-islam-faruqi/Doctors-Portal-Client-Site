import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
       
    }

    console.log(loggedInUser)

    useEffect( () => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({date:selectedDate, email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(appointments=>{
            setAppointments(appointments)
        })
    },[selectedDate])

    return (
        <main>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-4">
                    <div className="react-calendar-custom">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            className="calendar"
                        />
                    </div>
                </div>

                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}/>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);

    }

  

    useEffect(() => {
        loggedInUser.email && fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(appointments => {
                setAppointments(appointments)
            })
    }, [loggedInUser.email])

    console.log(loggedInUser)

    return (
        <main>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                <div className="header"> <h3> Appointments </h3> </div>
                    <div className="row">
                        
                        <div className="col-md-6">
                            <div className="react-calendar-custom">
                                <Calendar
                                    onChange={handleDateChange}
                                    value={new Date()}
                                    className="calendar"
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <AppointmentByDate appointments={appointments} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
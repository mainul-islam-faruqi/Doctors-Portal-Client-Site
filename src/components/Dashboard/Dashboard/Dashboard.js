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
            body: JSON.stringify({ date: selectedDate.toDateString(), email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAppointments(data)
            })
    }, [selectedDate,loggedInUser.email])


    return (
        <main>
            <div className="row">
                <div className="col-md-2" style={{paddingRight: "0px"}} >
                    <Sidebar />
                </div>
                <div className="col-md-10 dashboard-container">
                <div className="header"> <h3> Appointments </h3> </div>
                    <div className="row">
                        
                        <div className="col-md-6">
                            <div className="react-calendar-custom">
                                <Calendar
                                    onChange={handleDateChange}
                                    value={selectedDate}
                                    className="calendar"
                                />
                            </div>
                        </div>

                        <div className="col-md-6" >
                            <AppointmentByDate appointments={appointments} selectedDate={selectedDate} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
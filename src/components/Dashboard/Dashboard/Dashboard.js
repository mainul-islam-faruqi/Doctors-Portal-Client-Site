import React, { useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <main>
            <div className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                <div className="react-calendar-custom">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            className="calendar"
                        />
                    </div>
                </div>

                <div className="col-md-5">
                    <AppointmentByDate/>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
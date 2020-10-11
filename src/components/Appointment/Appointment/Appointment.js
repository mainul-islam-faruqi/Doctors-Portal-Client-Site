import React, { useState } from 'react';
import './Appointment.css';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <div className="Appointment">
                <Navbar/>
                <AppointmentHeader handleDateChange={handleDateChange}/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Appointment;
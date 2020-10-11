import React, { useState } from 'react';
import './Appointment.css';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

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

            <BookAppointment date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;
import React from 'react';
import './AppointmentHeader.css';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <main  className=''>
            <div style={{height:"600px"}} className="row  d-flex align-items-center justify-content-center ">
                <div className="col col-sm-12 col-md-5 col-lg-4 col-xl-4 mr-5">
                    <h1 style={{color: "#3A4256",marginBottom: "50px"}}> Appointment </h1>

                    <div className="react-calendar-custom">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                            className="calendar"
                        />
                    </div>
                    
                     
                </div>
               
                    <img  className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 " src={chair} alt=""/>
                
            </div>
        </main>
    );
};

export default AppointmentHeader;
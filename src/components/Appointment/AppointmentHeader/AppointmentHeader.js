import React from 'react';
import Calendar from 'react-calendar';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <main  className=''>
            <div style={{height:"600px"}} className="row  d-flex align-items-center justify-content-center ">
                <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4  offset-md-1">
                    <h1 style={{color: "#3A4256"}}> Appointment </h1>

                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                     
                </div>
               
                    <img  className="col col-sm-12 col-md-6 col-lg-6 col-xl-4 " src={chair} alt=""/>
                
            </div>
        </main>
    );
};

export default AppointmentHeader;
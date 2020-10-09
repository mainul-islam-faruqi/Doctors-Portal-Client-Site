import React from 'react';
import './MakeAppoinment.css'
import appointmentDoctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className="make-appointment "> 
            <div className="container">
                <div className="row ">
                 
                    <img  className="col-md-5 appointmentImg"  src={appointmentDoctor} alt=""/>
                   
                    
                    <div className="col-md-7 text-white py-5">
                        <p style={{color: "#1CC7C1", fontWeight: "700"}}> APPOINTMENT </p>
                        <h1> Make an appoinment <br/> Today </h1>
                        <p className="mt-3 mb-5"> It is a long extablished dact that a reader will be distracted by the readable content of a page when looking at its</p>
                        <button> Learn More </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
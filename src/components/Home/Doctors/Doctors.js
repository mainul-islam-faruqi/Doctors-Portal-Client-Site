import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDoctors(data)
        })
    }, [])

    return (
        <section className="doctors mt-5 mb-5 pt-5">
            <div className="section-header d-flex justify-content-center align-items-center">
                <div className="blog-header-text text-center mb-4">
                    <p style={{color: "#1CC7C1", fontWeight: "700", fontSize: "1.5rem"}}> Our Doctors </p>
                </div>
            </div>

            <div className="container">
                <div class="row">
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)
                }
                </div>
            </div>
        </section>
    );
};

export default Doctors;
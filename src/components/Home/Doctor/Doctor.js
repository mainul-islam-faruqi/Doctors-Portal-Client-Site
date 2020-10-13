import React from 'react';
import './Doctor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

const Doctor = ({doctor}) => {
    return (
        <div class="col col-md-4 col-sm-12">
            {
                doctor.image ? <img style={{width: "200px", height:"400px" }} src={`data:image/png;base64,${doctor.image.img}`} />
                :
            <img src={`http://localhost:5000/${doctor.img}`} class="card-img-top" alt="..."/>

            }
            <div class="text-center bg-white doctor-info">
                <h5 style={{fontWeight: "bold", fontSize: '1.1rem'}} class="card-title"> Dr. Caudi </h5>
                <small style={{color: "#ddd",fontWeight: "bold", fontSize: '.9rem'}} > <FontAwesomeIcon style={{color: "#1CC7C1"}} icon={faPhoneAlt} /> +01 452 200 126 </small>
            </div>
        </div>
    );
};

export default Doctor;
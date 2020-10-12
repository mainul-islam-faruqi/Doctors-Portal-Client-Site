import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCog, faFileAlt, faGripHorizontal, faHome, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex justify-content-between col-md-2 ">
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faGripHorizontal}/> <span> Dashboard </span> 
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome}/> <span> Home </span> 
                    </Link>
                </li>

                <li>
                    <Link to="/allPatients">
                    <FontAwesomeIcon icon={faCalendar}/> <span> Appointments </span> 
                    </Link>
                </li>

                <li>
                    <Link to="/patient">
                    <FontAwesomeIcon icon={faUsers}/> <span> Patients </span> 
                    </Link>
                </li>

                <li>
                    <Link to="/prescription">
                    <FontAwesomeIcon icon={faFileAlt}/> <span> prescriptions </span> 
                    </Link>
                </li>

                <li>
                    <Link to="/addDoctor">
                    <FontAwesomeIcon icon={faUserPlus}/> <span> Add Doctor </span> 
                    </Link>
                </li>

                <li>
                    <Link to="/doctor/setting">
                    <FontAwesomeIcon icon={faCog}/> <span> Settings  </span> 
                    </Link>
                </li>
                
            </ul>

            <div>
                <Link to="/" className="">
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span> Logout </span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
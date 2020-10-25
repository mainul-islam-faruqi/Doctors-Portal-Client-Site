import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCog, faFileAlt, faGripHorizontal, faHome, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        loggedInUser.email && fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setLoggedInUser({...loggedInUser, isDoctor: true})
            });
    }, [loggedInUser.email])

    return (
        <div className="sidebar  py-5 px-4" style={{ height: "100vh" }}  >
            <ul className="list-unstyled">
                <li>
                    <Link className="text-white" to="/dashboard">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span > Dashboard </span>
                    </Link>
                </li>

                <li>
                    <Link className="text-white" to="/">
                        <FontAwesomeIcon icon={faHome} /> <span> Home </span>
                    </Link>
                </li>

                <li>
                    <Link className="text-white" to="/dashboard-appointment">
                        <FontAwesomeIcon icon={faCalendar} /> <span> Appointments </span>
                    </Link>
                </li>

                {loggedInUser.isDoctor &&
                    <div className="doctors-container">



                        <li>
                            <Link className="text-white" to="/patient">
                                <FontAwesomeIcon icon={faUsers} /> <span> Patients </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="text-white" to="/prescription">
                                <FontAwesomeIcon icon={faFileAlt} /> <span> prescriptions </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="text-white" to="/addDoctor">
                                <FontAwesomeIcon icon={faUserPlus} /> <span> Add Doctor </span>
                            </Link>
                        </li>

                        <li>
                            <Link className="text-white" to="/doctor/setting">
                                <FontAwesomeIcon icon={faCog} /> <span> Settings  </span>
                            </Link>
                        </li>

                    </div>}

            </ul>

            <div >
                <Link className="text-white logout" to="/" >
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span> Log Out </span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
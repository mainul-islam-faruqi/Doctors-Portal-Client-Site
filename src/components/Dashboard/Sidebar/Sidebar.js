import React, { useContext, useEffect } from 'react';
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
                if(data){
                    setLoggedInUser({...loggedInUser, isDoctor: true})
                }
                
            });
    }, [loggedInUser.email])

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setLoggedInUser({ isDoctor: false})
    }

    return (
        <div className="sidebar  py-5 px-4"   >
            <ul className="list-unstyled pl-xl-3">
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

                {loggedInUser.email &&
                    <div className="doctors-container">



                        <li>
                            <Link className="text-white" to="/patients">
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
                <Link className="text-white logout pl-xl-3" to="/dashboard"  onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span> Log Out </span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
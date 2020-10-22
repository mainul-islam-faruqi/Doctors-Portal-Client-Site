import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="#">About</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 font-weight-bold" to="/dashboard"> Dashboard </Link>
                    </li>

                    <li className="nav-item">
                        <Link className={`nav-link mr-5 font-weight-bold ${window.location.pathname === '/appointment'? 'text-white': "text-white"}`}  style={{backgroundColor: " #3a4256 ", padding: "5px 10px"}} to="#">Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link mr-5 font-weight-bold ${window.location.pathname === '/appointment'? 'text-white': "text-white"}`} style={{backgroundColor: " #3a4256 ", padding: "5px 10px"}} to="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link mr-5 font-weight-bold ${window.location.pathname === '/appointment'? 'text-white': "text-white"}`} style={{backgroundColor: " #3a4256 ", padding: "5px 10px"}} to="#">Contact Us</Link>
                    </li>
                   
                   
                
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
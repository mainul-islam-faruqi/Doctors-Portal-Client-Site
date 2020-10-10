import React from 'react';
import './FooterCol.css'
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 style={{color: "#1CC7C1", fontWeight: "800", fontSize:"1.1rem",paddingBottom: "20px"}}> {props.menuTitle ? props.menuTitle : "  "} </h6>

            <ul className="list-unstyled">
                {
                    props.menuItems.map((item,index) => <li key={index}>
                        <Link className="text-secondary" to={item.link}> {item.name} </Link>
                        </li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;
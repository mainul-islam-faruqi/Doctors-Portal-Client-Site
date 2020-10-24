import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main  className=''>
            <div style={{height:"600px"}} className="row  d-flex align-items-center justify-content-center ">
                <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 ml-5 mb-4  offset-md-1">
                    <h1 style={{color: ""}}> Your New Smile <br/> Starts Here </h1>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium possimus doloremque deleniti consequatur magni?

                    </p>
                  <Link to="/appointment" className='button-primary' > GET APOINTMENT </Link> 
                </div>
               
                    <img  className="col col-sm-12 col-md-6 col-lg-6 col-xl-4" src={chair} alt=""/>
                
            </div>
        </main>
    );
};

export default HeaderMain;
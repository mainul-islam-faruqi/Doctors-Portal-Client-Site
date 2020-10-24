import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <main>
            <div className="row">
                <div className="col-lg-2 col-md-3" style={{ paddingRight: "0px" }} >
                    <Sidebar />
                </div>
                <div className="col-lg-10 col-md-9 dashboard-container">
                    <div className="header"> <h3> Dashboard </h3> </div>
                    <div className="row pl-2">
                        <div className="col-md-3 ">
                            <div className="pending  d-flex justify-content-between align-items-center">
                                <div className="number">
                                    09
                                </div>

                                <div className="status">
                                    Pending <br /> Appointments
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="todays-appointment  d-flex justify-content-between align-items-center">
                                <div className="number">
                                    09
                                </div>

                                <div className="status">
                                    Pending <br /> Appointments
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="total-appointment  d-flex justify-content-between align-items-center">
                                <div className="number">
                                    09
                                </div>

                                <div className="status">
                                    Pending <br /> Appointments
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="total-patients  d-flex justify-content-between align-items-center">
                                <div className="number">
                                    09
                                </div>

                                <div className="status">
                                    Pending <br /> Appointments
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
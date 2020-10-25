import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DashboardAppointmentTable from './DashboardAppointmentTable';


const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);

    }
    useEffect(() => {
        loggedInUser.email && fetch('http://localhost:5000/get-todays-appointment', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate.toDateString() })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAppointments(data)
            })
    }, [selectedDate,loggedInUser.email])

    return (
        <main>
            <div className="row">
                <div className="col-lg-2 col-md-3" style={{ paddingRight: "0px" }} >
                    <Sidebar />
                </div>
                <div className="  col-lg-10 col-md-9 col-xs-12 dashboard-container">
                    <div className="header"> <h3> Dashboard </h3> </div>
                    <div className="row pl-2">
                        <div className="col mb-4  col-lg-3 col-md-6 col-xs-12 ">
                            <div className="pending  d-flex justify-content-around align-items-center">
                                <div className="number">
                                    09
                                </div>

                                <div className="status">
                                    Pending <br /> Appointments
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4  col-lg-3 col-md-6 ">
                            <div className="todays-appointment  d-flex justify-content-around align-items-center">
                                <div className="number">
                                    09
                                </div>

                                <div className="status">
                                    Pending <br /> Appointments
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4  col-lg-3 col-md-6 ">
                            <div className="total-appointment  d-flex justify-content-around align-items-center">
                                <div className="number">
                                    09
                                </div>

                                <div className="status">
                                    Pending <br /> Appointments
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4 col-lg-3 col-md-6 ">
                            <div className="total-patients  d-flex justify-content-around align-items-center">
                                <div className="number">
                                    09
                                </div>

                                <div className="status">
                                    Pending <br /> Appointments
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="appointmentByDate appointment-list mt-5 ml-2">

                        <div className="appointmentByDate-header pb-5 d-flex justify-content-between">
                            <h6 className="text-brand font-weight-bold" > Recent Appointments</h6>

                            <h6 className="text-secondary font-weight-bold" > 

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">

                                        <KeyboardDatePicker
                                            id="date-picker-dialog"
                                            format="dd/MM/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            
                                        />

                                    </Grid>
                                </MuiPickersUtilsProvider>

                            </h6>
                        </div>

                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col"> Sr. No  </th>
                                    <th scope="col"> Date  </th>
                                    <th scope="col"> Time  </th>
                                    <th scope="col"> Name  </th>
                                    <th scope="col"> Contact  </th>
                                    <th scope="col"> Prescription  </th>
                                    <th scope="col"> Action </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    appointments.map((appointment, index) =>
                                    <DashboardAppointmentTable key={appointment._id} appointment={appointment} date={selectedDate} idx={index}  />
                                        
                                    )
                                }

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default Dashboard;
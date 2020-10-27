import React, { useEffect, useState } from 'react';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Sidebar from '../Sidebar/Sidebar';

const Patients = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [patients, setPatients] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date)
    }

    useEffect(() => {
        fetch('http://localhost:5000/all-patient', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPatients(data);
            })

    }, [])
    return (
        <main>
            <div className="row">
                <div className="col-lg-2 col-md-3" style={{ paddingRight: "0px" }} >
                    <Sidebar />
                </div>
                <div className="  col-lg-10 col-md-9 col-xs-12 dashboard-container">
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
                                    <th scope="col"> Name  </th>
                                    <th scope="col"> Gender  </th>
                                    <th scope="col"> Age  </th>
                                    <th scope="col"> Weight  </th>
                                    <th scope="col"> Contact  </th>
                                    <th scope="col"> Address </th>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    patients.map((patient, index) =>
                                        <tr>
                                            <td> { index < 9? `0${index+1}`: index +1} </td>
                                            <td> {patient.name} </td>
                                            <td> {patient.gender?patient.gender: "Not Set"}  </td>
                                            <td> {patient.age?patient.age: "Not Set"} </td>
                                            <td> {patient.weight?patient.weight: "Not Set"} </td>
                                            <td> {patient.phone?patient.phone: "Not Set"} </td>

                                            <td> Dhaka, Bangladesh </td>
                                        </tr>
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

export default Patients;
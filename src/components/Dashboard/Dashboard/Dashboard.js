import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);

    }

  

    useEffect(() => {
        loggedInUser.email && fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate.toDateString(), email: loggedInUser.email })
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

                    <div className="appointmentByDate mt-5 ml-2">

            <div className="appointmentByDate-header pb-5 d-flex justify-content-between">
                <h6 className="text-brand font-weight-bold" > Recent Appointments</h6>

                <h6 className="text-secondary font-weight-bold" > {selectedDate.toDateString()}  </h6>
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
                            <tr key={appointment._id}>
                                <td> {index + 1} </td>
                                <td>  {selectedDate.toDateString()} </td>
                                <td> {appointment.schedule} </td>
                                <td> {appointment.name} </td>
                                <td> {appointment.phone} </td>
                                <td>
                                    <select className=" select" id="validationTooltip04" required>
                                        <option selected disabled value=""> Not Added</option>
                                        <option> View </option>
                                    </select>
                                </td>

                                <td>
                                    <select className=" select" id="validationTooltip04" required>
                                        <option selected disabled value=""> Pending </option>
                                        <option> Approved </option>
                                        <option> Canceled </option>
                                    </select>
                                </td>
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

export default Dashboard;
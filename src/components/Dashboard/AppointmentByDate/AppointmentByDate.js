import React from 'react';
import './AppointmentByDate.css';

const AppointmentByDate = ({ appointments, selectedDate }) => {
    return (
        <div className="appointmentByDate">

            <div className="appointmentByDate-header pb-5 d-flex justify-content-between">
                <h6 className="text-brand font-weight-bold" >Appointments</h6>

                <h6 className="text-secondary font-weight-bold" > {selectedDate.toDateString()}  </h6>
            </div>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"> Name  </th>
                        <th scope="col"> Schedule  </th>
                        <th scope="col"> Action </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        appointments.map(appointment =><tr key={appointment._id}><td>{appointment.name}</td><td> {appointment.schedule}</td><select className=" select" id="validationTooltip04" required><option selected disabled value=""> Not visited</option><option>visited</option></select></tr>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default AppointmentByDate;
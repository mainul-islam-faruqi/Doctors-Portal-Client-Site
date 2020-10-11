import React from 'react';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            {appointments.length}

            {
                appointments.map(appointment=> <li> {appointment.name} </li>)
            }
            
        </div>
    );
};

export default AppointmentByDate;
import React from 'react';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            

            {
                appointments.map(appointment=> <li> {appointment.name} </li>)

            }

<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>
            
        </div>
    );
};

export default AppointmentByDate;
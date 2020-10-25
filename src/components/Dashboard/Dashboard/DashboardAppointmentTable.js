import React from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';


const DashboardAppointmentTable = ({ appointment, date, idx }) => {
    return (
        <tr>
            <td> {idx + 1} </td>
            <td>  {date.toDateString()} </td>
            <td> {appointment.schedule} </td>
            <td> {appointment.name} </td>
            <td> {appointment.phone} </td>
            <td>
                <div className="button-primary">
                    view
                </div>
            </td>

            <td>
                <div className="select-main-container">
                    <div className="select-container">
                        <select className="select" id="validationTooltip04" required>
                            <option selected value=""> Pending </option>
                            <option> Approved </option>
                            <option> Canceled </option>
                        </select>
                        <div className="create-icon">
                            <CreateOutlinedIcon />
                        </div>

                    </div>
                </div>

            </td>
        </tr>
    );
};

export default DashboardAppointmentTable;
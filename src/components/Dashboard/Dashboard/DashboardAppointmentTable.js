import React, { useState } from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';


const DashboardAppointmentTable = ({ appointment, date, idx,pending, setPending  }) => {
    const [action, setAction] = useState(appointment.action.toLowerCase());
    const onChangeActionHandler = e => {
        setAction(e.target.value.toLowerCase())
        if(e.target.value.toLowerCase() === 'pending'){
            setPending(pending + 1)
        }
        else{
            setPending(pending - 1)
        }
        fetch('http://localhost:5000/update-status', {
            method: 'PATCH',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({
                action: e.target.value, // if giving action state, it will go the previous action bcz setAtion and fetch are called at the same time.
                id: appointment._id
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
    }
    
    return (
        <tr>
            <td> {idx + 1} </td>
            <td>  {date.toDateString()} </td>
            <td> {appointment.schedule} </td>
            <td> {appointment.name} </td>
            <td> {appointment.phone} </td>
            <td>
                <div className="button-primary" style={{width: "90px", textAlign: "center"}}>
                    view
                </div>
            </td>

            <td>
                {action === "pending" &&
                    <div className="select-main-container">
                        <div className="select-container">
                            <select className={`select select-${action}`} id="validationTooltip04" onChange={onChangeActionHandler} required>
                                <option selected > Pending </option>
                                <option> Approved </option>
                                <option> Canceled </option>
                            </select>
                            <div className="create-icon">
                                <CreateOutlinedIcon />
                            </div>
                        </div>
                    </div>
                }

                {action === "approved" &&
                    <div className="select-main-container">
                        <div className="select-container">
                            <select className={`select select-${action}`} id="validationTooltip04" onChange={onChangeActionHandler} required>
                                <option > Pending </option>
                                <option selected> Approved </option>
                                <option> Canceled </option>
                            </select>
                            <div className="create-icon">
                                <CreateOutlinedIcon />
                            </div>
                        </div>
                    </div>
                }

                {action === "canceled" &&
                    <div className="select-main-container">
                        <div className="select-container">
                            <select className={`select select-${action}`}  id="validationTooltip04" onChange={onChangeActionHandler} required>
                                <option > Pending </option>
                                <option > Approved </option>
                                <option selected> Canceled </option>
                            </select>
                            <div className="create-icon">
                                <CreateOutlinedIcon />
                            </div>
                        </div>
                    </div>
                }
            </td>
        </tr>
    );
};

export default DashboardAppointmentTable;
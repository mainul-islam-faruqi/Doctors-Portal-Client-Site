import React from 'react';
import './AppointmentForm.css'
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentSub,schedule, date }) => {

    // UPDATE DATE 
    const updateDate = d => {
        let today = new Date(d);
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = `${dd}-${mm}-${yyyy}`;
        return today;
    }


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.service = appointmentSub;
        data.date = date.toDateString();
        data.created = new Date();
        data.action = "pending";

        fetch('http://localhost:5000/addAppointment', {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert("Appointment created successfully.");
            }
        })
    }


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-brand text-center mt-3" > {appointmentSub} </h2>
                <p className="text-secondary text-center mb-0"> On {date.toDateString()} </p>

                <form className="model-form" onSubmit={handleSubmit(onSubmit)} >
                    <select ref={register}  className="form-control form-control-lg ">
                        <option> {appointmentSub} </option>
                    </select>
                    <input ref={register}  className="form-control form-control-lg  mt-2" type="text" name="name" placeholder="Your Name"  />
                    {errors.name && <span className="text-danger"> This field is required </span> }
                    <input ref={register}  className="form-control form-control-lg  mt-2" type="text" name="phone" placeholder="Phone Number" />
                    {errors.phone && <span className="text-danger"> This field is required </span>}
                    <input ref={register}  className="form-control form-control-lg mt-2 mb-2" type="text" name="email" placeholder="Email " />
                    {errors.email && <span className="text-danger"> This field is required </span>}

                    <div className="form-group">
                        <select className="form-control" name="schedule" ref={register({ required: true })} >
                            <option disabled={true} value="Not Selected">Select Time</option>
                            <option value="8:00 AM - 9:00 PM">8:00 AM - 9:00 PM</option>
                            <option value="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</option>
                            <option value="4:00 PM - 7:00 PM">4:00 PM - 7:00 PM</option>
                            <option value="7:00 PM - 9:00 PM">7:00 PM - 9:00 PM</option>
                            <option value="5:00 AM - 9:00 PM">5:00 AM - 9:00 PM</option>
                            <option value="11:00 AM - 5:00 PM">11:00 AM - 5:00 PM</option>
                        </select>
                        {errors.date && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <select ref={register}  name="gender" className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option ref={register}  value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="not set"> other </option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-md-4">
                            <input ref={register}  type="text" name="age" className="form-control" id="inlineFormInputName" placeholder="Age"></input>
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="col-md-4">
                            <input ref={register}  type="text" name="weight" className="form-control" id="inlineFormInputName" placeholder="Weight"></input>
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>

                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="d-flex justify-content-end">
                        <input className="button-primary d-flex justify-content-end mt-2" type="submit" />
                    </div>
                </form>

            </Modal>
        </div>
    );
};

export default AppointmentForm;
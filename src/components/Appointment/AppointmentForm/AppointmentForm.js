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

    

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        data.service = appointmentSub;
        data.schedule = schedule;
        data.date = date.toDateString();
        data.created = new Date();

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
                <p className="text-secondary text-center mb-0"> {date.toDateString()} </p>

                <form className="model-form" onSubmit={handleSubmit(onSubmit)} >
                    <select ref={register}  className="form-control form-control-lg ">
                        <option> {appointmentSub} </option>
                    </select>
                    <input ref={register}  className="form-control form-control-lg  mt-2" type="text" name="name" placeholder="Your Name"  />
                    <input ref={register}  className="form-control form-control-lg  mt-2" type="text" name="phone" placeholder="Phone Number" />
                    <input ref={register}  className="form-control form-control-lg mt-2 mb-2" type="text" name="email" placeholder="Email " />

                    <div className="row">
                        <div className="col-md-4">
                            <select ref={register}  className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option ref={register}  value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="not set"> other </option>

                            </select>
                        </div>

                        <div className="col-md-4">
                            <input ref={register}  type="text" name="age" className="form-control" id="inlineFormInputName" placeholder="Age"></input>
                        </div>

                        <div className="col-md-4">
                            <input ref={register}  type="text" name="weight" className="form-control" id="inlineFormInputName" placeholder="Weight"></input>
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
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

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentSub }) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
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
                <form className="model-form" onSubmit={handleSubmit(onSubmit)} >
                    <select class="form-control form-control-lg mt-2">
                        <option>Large select</option>
                    </select>
                    <input class="form-control form-control-lg  mt-2" type="text" placeholder=".form-control-lg" />
                    <input class="form-control form-control-lg  mt-2" type="text" placeholder=".form-control-lg" />
                    <input class="form-control form-control-lg mt-2" type="text" placeholder=".form-control-lg" />
                    <input class="form-control form-control-lg  mt-2 mb-3" type="text" placeholder=".form-control-lg" />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="button-primary d-flex justify-content-end" type="submit" />
                </form>

            </Modal>
        </div>
    );
};

export default AppointmentForm;
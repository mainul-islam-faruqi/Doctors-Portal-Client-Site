import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div class="col-sm-6 col-md-4 mb-4">
            <div class="card p-3" style={{boxShadow:"1px 1px 12px  #eaeaea", border: "none" ,padding: '10px 0'}}>
                <div class="card-body text-center">
                    <h5 class="card-title text-brand"> {booking.subject} </h5>
                    <h6 class="card-title"> {booking.visitingHour} </h6>
                    <p class="card-text text-muted "> {booking.totalSpace} SPACES AVAILABLE  </p>
                    <button onClick={openModal} className="button-primary">
                        BOOK APPOINTMENT
                    </button>
                    <AppointmentForm  modalIsOpen={modalIsOpen} closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
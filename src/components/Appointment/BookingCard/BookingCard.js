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
        <div className="col-sm-6 col-md-6 col-lg-4 mb-4">
            <div className="card p-3" style={{boxShadow:"1px 1px 12px  #eaeaea", border: "none" ,padding: '10px 0'}}>
                <div className="card-body text-center">
                    <h5 className="card-title text-brand"> {booking.subject} </h5>
                    <h6 className="card-title"> {booking.visitingHour} </h6>
                    <p className="card-text text-muted "> {booking.totalSpace} SPACES AVAILABLE  </p>
                    <button onClick={openModal} className="button-primary">
                        BOOK APPOINTMENT
                    </button>
                    <AppointmentForm  modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentSub={booking.subject} schedule={booking.visitingHour} date={date} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
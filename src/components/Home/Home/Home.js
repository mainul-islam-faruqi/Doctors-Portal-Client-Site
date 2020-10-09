import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService />
            <MakeAppointment/>
        </div>
    );
};

export default Home;
import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock , faMapMarkerAlt ,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        id: 1,
        title: 'Opening Hours',
        description: ' We are open 7 days',
        icon: faClock,
        background: "primary"
    },
    {
        id: 2,
        title: 'Visit Out Location',
        description: 'BrooklYn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: "dark"
    },
    {
        id: 1,
        title: 'Call us now',
        description: ' +15697854124',
        icon: faPhoneAlt,
        background: "primary"
    },
]

const BusinessInfo = () => {
    return (
        <section className=" d-flex justify-content-center">
            <div className="w-75 row ">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;
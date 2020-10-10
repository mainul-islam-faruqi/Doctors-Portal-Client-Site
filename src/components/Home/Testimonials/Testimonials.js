import React from 'react';
import './Testimonials.css';
import quote from '../../../images/quote.png'
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png'
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: "Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Hic non architecto nobis, adipisci recus andae repellat accusa ntium consequ untur, recus andae repellat accusa ntium consequ untur, ",
        name: "Wilson Hanrry",
        from: "California",
        img: wilson
    },
    {
        quote: "Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Hic non architecto nobis, adipisci recus andae repellat accus antium consequuntur, recus andae repellat accusa ntium consequ untur, ",
        name: "Ema Gomez",
        from: "California",
        img: ema
    },
    {
        quote: "Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Hic non architecto nobis, adipisci recu sandae repellat accusa ntium conse quuntur, recus andae repellat accusa ntium consequ untur, ",
        name: "Aliza Farari",
        from: "California",
        img: aliza
    },
    
]

const Testimonials = () => {
    return (
        <section className="testimonials m-5 pt-5 pl-3 pr-3 ">
            <div className="">
                <div className="section-header d-flex justify-content-between align-items-center">
                    <div className="tesitimonial-text">
                        <p style={{color: "#1CC7C1", fontWeight: "700"}}> APPOINTMENT </p>
                        <h1> What's Our Patients <br/> say </h1>
                    </div>
                    <img className=" img-fluid quote-img  " src={quote} alt=""/>
                </div>
                <div class="card-deck">
                    {
                        testimonialData.map((testimonial, index )=> <Testimonial testimonial={testimonial} key={index}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

const Testimonial = ({testimonial}) => {
    return (
        <div class="col col-sm-12 col-md-6 col-lg-4 mb-4 "> 
        <div style={{boxShadow:"0px 2px 5px #ddd ", border: "none"}} class="card pr-2 pl-2 mt-5 ">
            <div class="card-body mt-2 mb-2">
                <p class="card-text text-justify text-secondary"> {testimonial.quote} </p>
                
            </div>
            <div className="user-info d-flex align-items-center ml-3 mb-4 mt-4">
                <img src={testimonial.img} style={{width: "3.5rem", height:"3rem"}} class=" pl-2" alt="..." />
                <div className="pl-3">
                    <small style={{color: "#1cc7c1",fontWeight: "bold", fontSize: '1rem'}}> {testimonial.name} </small> <br/>
                    <small class="text-muted">{testimonial.from} </small> 
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;
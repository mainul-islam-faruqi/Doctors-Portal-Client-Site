import React from 'react';
import './FeaturedService.css'
import featuredImg from '../../../images/Mask Group 3-min.png'

const FeaturedService = () => {
    return (
        <section className=" featured-service mx-5 px-5">
            <div className="row  d-flex align-items-center">
            <div className="col-md-5">
                <img className="img-fluid featured-img" src={featuredImg} alt=""/>
            </div>
            <div className="col-md-7">
                <h1 style={{color: "#3A4256"}} > Exceptional Dental Care, on Your Terms </h1>
                <p className="text-secondary ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis rerum tenetur cum ipsum doloremque illo! Itaque quia, exercitationem odit quasi, neque, molestiae placeat ea soluta accusantium assumenda porro fuga natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam deserunt possimus veritatis adipisci quidem tenetur itaque aut quod recusandae assumenda. Perferendis, omnis hic facilis autem error earum quisquam culpa ipsam!</p>

                <button className="button-primary"> Learn Mone</button>
            </div>
        </div>
        </section>
    );
};

export default FeaturedService;
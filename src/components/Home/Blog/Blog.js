import React from 'react';
import './Blog.css'
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
// import aliza from '../../../images/aliza.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const blogData = [
    {
        title : 'Check at least a doctor in a year for your teeth',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Cudi',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Two time brush in a day can keep you healthy',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dr. Sinthia',
        authorImg : ema,
        date : '23 April 2019'
    },
    // {
    //     title : 'The tooth cancer is taking a challenge',
    //     description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
    //     author:'Dr. Cudi',
    //     authorImg : aliza,
    //     date : '23 April 2019'
    // },
]



const Blog = () => {
    return (
        <section className="blog m-5 pt-5 pl-3 pr-3 ">
        <div className="">
            <div className="section-header d-flex justify-content-center align-items-center">
                <div className="blog-header-text text-center mb-4">
                    <p style={{color: "#1CC7C1", fontWeight: "700"}}> OUR BLOG </p>
                    <h1 style={{color: "#3A4256"}}> From Out Blog News </h1>
                </div>
            </div>
            <div class="card-deck mt-5">
                
                    <div class="card-bg card col col-sm-12 col-md-6 col-lg-4 mb-4 ">
                        <div class="card-body fixed-card ">
                        <div className="user-info   ml-4 mb-4 mt-4">
                            <div className="pl-3 text">
                                <small style={{color: "white",fontWeight: "bold", fontSize: '1.1rem'}}> Rased Kabir </small> <br/>
                                <small style={{color: "white",fontWeight: "bold", fontSize: '.9rem'}} class="text-left"> 23 April 2019 </small>
                            </div>
                        </div>
                            <h5  class="card-text card-body text-white font-weight-bold">Check at least a doctor in a year for your teeth</h5>
                            <FontAwesomeIcon style={{fontSize:"2.5rem", color: "white", position: "absolute", bottom:"20px",left: "30px"}} icon={faLongArrowAltRight} />
                        </div>
                    </div>
                
                {
                    blogData.map((post, index )=> <BlogPost post={post} key={index}/>)
                }
            </div>
        </div>
    </section>
    );
};

export default Blog;
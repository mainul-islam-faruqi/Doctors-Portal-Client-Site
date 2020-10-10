import React from 'react';

const BlogPost = ({post}) => {
    return (
        <div  class="col col-sm-12 col-md-6 col-lg-4 mb-4 "> 

            <div style={{boxShadow:"0px 2px 40px  #e0e0e0", border: "none" ,padding: '10px 0'}} >
            <div className="user-info d-flex align-items-center ml-4 mb-4 mt-4">
                <img src={post.authorImg} style={{width: "3rem", height:"3rem"}} class=" mx-3 " alt="..." />
                <div className="pl-3">
                    <small style={{fontWeight: "bold", fontSize: '1.1rem'}}> {post.author} </small> <br/>
                    <small style={{color: "#ddd",fontWeight: "bold", fontSize: '.9rem'}} class=" "> {post.date} </small>
                </div>
            </div>
            <div style={{ border: "none"}} class="card pr-2 pl-2  ">
                <div class="card-body mt-2 mb-2">
                    <h5 style={{color: "#585858",fontWeight: "bold", fontSize: '1rem'}} class="card-title"> {post.title} </h5>
                    <p style={{color: "#cecece",fontWeight: "bold", fontSize: '.9rem'}} class=" text-justify"> {post.description} </p>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default BlogPost;
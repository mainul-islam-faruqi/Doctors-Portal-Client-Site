import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);


    const handleChange = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addDoctor', {
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    
    return (
        <section className="container-fluid row">
            <Sidebar/>
            <div className="col-md-9">
                <h5> Add a Doctor </h5>

                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="formGroupExampleInput">  Email  </label>
                        <input onChange={handleChange} type="email" class="form-control" name="email" placeholder="Email "/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">  Name </label>
                        <input onChange={handleChange} type="text" class="form-control" name="name"  placeholder=" Name "/>
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2"> Upload File </label>
                        <input onChange={e => setFile(e.target.files[0])} type="file" class="form-control"  placeholder=""/>
                    </div>
                    <button type="submit" className="button-primary"> Submit </button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;
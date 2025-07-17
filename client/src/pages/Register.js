import React, {useState} from "react";
import './Register.css'

const Register = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        course: '',
        message: ''
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
    }
    return (
        <div className="register-page">
            <h1>Register Page</h1>

            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange}/> <br />
                <input type="text" name="email" placeholder="Email" onChange={handleChange}/> <br />
                <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange}/> <br />
                <input type="text" name="course" placeholder="Course" onChange={handleChange}/> <br />
                <input type="text" name="message" placeholder="Message" onChange={handleChange}/>
                <input className="submit-btn" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;
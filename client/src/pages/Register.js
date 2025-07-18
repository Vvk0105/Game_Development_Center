import React, {useState} from "react";
import './Register.css'
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
    const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone_number.trim()) newErrors.phone_number = 'Phone Number is required';
    if (!formData.course.trim()) newErrors.course = 'Course is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
    };

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

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
    }
    fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Registration successful!");
        console.log(data);
        navigate("/courses");
    })
    .catch(error => {
        console.error("Error:", error);
    });
    };

    return (
        <div className="register-page">
            <h1>Register Page</h1>

            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange}/> <br />
                {errors.full_name && <p className="error">{errors.full_name}</p>}
                <input type="text" name="email" placeholder="Email" onChange={handleChange}/> <br />
                {errors.email && <p className="error">{errors.email}</p>}
                <input type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange}/> <br />
                {errors.phone_number && <p className="error">{errors.phone_number}</p>}
                <input type="text" name="course" placeholder="Course" onChange={handleChange}/> <br />
                {errors.course && <p className="error">{errors.course}</p>}
                <input type="text" name="message" placeholder="Message" onChange={handleChange}/>
                {errors.message && <p className="error">{errors.message}</p>}
                <input className="submit-btn" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;
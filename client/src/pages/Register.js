import React from "react";
import './Register.css'
const Register = () => {
    return (
        <div className="register-page">
            <h1>Register Page</h1>

            <form className="register-form" >
                <input type="text" name="full_name" placeholder="Full Name"/> <br />
                <input type="text" name="email" placeholder="Email"/> <br />
                <input type="text" name="phone_number" placeholder="Phone Number"/> <br />
                <label htmlFor="">Course</label>
                <select name="course">
                    <option value="Unity">Unity</option>
                    <option value="Unreal Engine">Unreal Engine</option>
                    <option value="Game Design">Game Design</option>
                    <option value="2D/3D Art">2D/3D Art</option>
                </select><br />
                <input type="text" name="message" placeholder="Message" />
                <input className="submit-btn" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;
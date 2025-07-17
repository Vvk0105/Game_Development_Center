import React from "react";
import './Courses.css';
const Courses = () => {
    return (
    <div className="courses-page">
        <h1>Our Courses</h1>
        <div className="course-list">
            <div className="course-card">
                <img src="/images/logo192.png" alt="Unity" />
                <h3>Unity</h3>
                <p>description about course 1</p>
                <p>Duration: 1 Months</p>
            </div>
            <div className="course-card">
                <img src="/images/logo192.png" alt="Unreal Engine" />
                <h3>Unreal Engine</h3>
                <p>description about course 2</p>
                <p>Duration: 2 Months</p>
            </div>
            <div className="course-card">
                <img src="/images/logo192.png" alt="Unreal Engine" />
                <h3>2D/3D Art</h3>
                <p>description about course 3</p>
                <p>Duration: 3 Months</p>
            </div>
        </div>
    </div>
    );
};

export default Courses;
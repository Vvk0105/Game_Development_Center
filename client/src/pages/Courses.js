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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur sint, perferendis adipisci commodi exercitationem accusantium eligendi facere eaque reiciendis, alias nostrum? Laboriosam quas officiis repellendus quaerat explicabo repudiandae delectus iusto.</p>
                <p>Duration: 1 Months</p>
            </div>
            <div className="course-card">
                <img src="/images/logo192.png" alt="Unreal Engine" />
                <h3>Unreal Engine</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, eveniet quibusdam, molestias fuga dolores voluptatum quasi similique doloremque corporis ipsam aperiam optio sequi eos quod, odit veritatis dignissimos cum mollitia.</p>
                <p>Duration: 2 Months</p>
            </div>
            <div className="course-card">
                <img src="/images/logo192.png" alt="Unreal Engine" />
                <h3>2D/3D Art</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum similique cum dolores alias? Totam perspiciatis et veritatis eius ullam consequuntur deleniti maxime, qui aspernatur. Facilis minima deserunt accusantium nostrum laudantium.</p>
                <p>Duration: 3 Months</p>
            </div>
        </div>
    </div>
    );
};

export default Courses;
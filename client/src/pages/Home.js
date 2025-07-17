import React from 'react';
import './Home.css'
const Home = () => {
  return (
    <div className="home">
      <div className='banner'>
        <h1>Welcome to GameDevelopmentTraining Center</h1>
            <div className="btn">
                <a href="/courses">Explore Courses</a>
                <a href="/register">Join Now</a>
            </div>
      </div>
    </div>
  );
};

export default Home;

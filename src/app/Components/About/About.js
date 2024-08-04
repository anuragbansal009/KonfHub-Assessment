import React from 'react';
import './About.css'
const About = ({ description }) => {
  return (
    <div>
      <div className='text-2xl font-bold py-5'>ABOUT EVENT</div>
      <div className="event-description" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default About;

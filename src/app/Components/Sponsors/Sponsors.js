import React from 'react';
import './Sponsors.css'
const Sponsors = ({ sponsors }) => {
  return (
    <div className="sponsors-section">
      <div className='text-2xl font-bold py-5'>THIS IS EVENT SPONSORS</div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: sponsors.sponsor_section_description }} />
        <a href="https://konfhub.com"><img className='sponsors_logo' src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75" alt="KonfHub" /></a>
      </div>
      <div className='sponsor-section-2'>
        <div className='text-2xl font-bold py-5'>SPONSOR CATEGORY</div>
        <hr className='section-divider' />
        <a href="https://darkknight.in"><img className='sponsors_logo' src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg&w=1920&q=75" alt="Dark-Knight" /></a>
      </div>
    </div>
  );
};

export default Sponsors;

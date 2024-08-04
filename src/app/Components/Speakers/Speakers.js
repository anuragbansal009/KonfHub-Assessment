import React, { useEffect, useState } from 'react';
import SpeakersCard from '../Cards/SpeakersCard/SpeakersCard';
import { getSpeakerData } from '../../Services/apiService';
import './Speakers.css'
const Speakers = ({ speakers }) => {
  const [speakerDetails, setSpeakerDetails] = useState(null);

  useEffect(() => {
    const fetchSpeakerData = async () => {
      try {
        const data = await getSpeakerData();
        setSpeakerDetails(data);
      } catch (error) {
        console.error('Error fetching speaker data:', error);
      }
    };

    fetchSpeakerData();
  }, []);

  if (!speakerDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="speakers-section">
      <div className='text-2xl font-bold py-5'>THIS IS SPEAKERS SECTION</div>
      <div>This is the description for speakers section.</div>
      <SpeakersCard speakerDetails={speakerDetails} />
    </div>
  );
};

export default Speakers;

/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react';
import { getEventData } from '../../Services/apiService';
import Tabs from '../../Components/Tabs/Tabs';
import './EventPage.css';
import Header from '../../Components/Header/Header';
import EventTimer from '../../Components/EventTimer/EventTimer';
import moment from 'moment/moment'

const EventPage = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const data = await getEventData();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, []);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-page">
      <header className="header">
        <Header eventData={eventData} />
      </header>
      <div className="main-content">
        <div className="left-content">
          <div className="event-image">
            <img src={eventData.event_poster_url} alt="Event" />
          </div>
          <Tabs eventData={eventData} />
        </div>
        <div className="right-content">
          <div className="event-details">
            <div className="text-2xl font-extrabold	">KonfHub Frontend Evaluation Task</div>
            <div className='grid grid-cols-2 w-full py-[12px]'>
              <div className=''>
                <div className='flex align-center flex-row'>
                  <div className='mx-2 self-center'>
                    <img width="18" height="18" src="https://img.icons8.com/ios-glyphs/30/video-call.png" alt="video-call" />
                  </div>
                  <div className='mx-2'>
                    Online
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='flex align-center flex-row'>
                  <div className='mx-2 self-center'>
                    <img width="18" height="18" src="https://img.icons8.com/fluency-systems-filled/48/ticket.png" alt="ticket" />
                  </div>
                  <div className='mx-2'>
                    Paid
                  </div>
                </div>
              </div>
            </div>
            <p><strong>Event Live Link: </strong><a href="/" className="text-blue-600 underline">Open streaming website</a></p>
            <p style={{ textAlign: "left" }}><strong>Date: </strong>{moment.utc(eventData.start_date + ' ' + eventData.start_time).local().format('MMM Do, YYYY h:mm A')} - {moment.utc(eventData.end_date + ' ' + eventData.end_time).local().format('MMM Do, YYYY h:mm A')} IST</p>
            <EventTimer eventData={eventData} />
          </div>
          <div className='event_btn'>

            <button>Buy Now</button>
            <a href="#!" className="official-website">Official Website <img width="22" height="20" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-share-interface-kiranshastry-lineal-kiranshastry-1.png" alt="external-share-interface-kiranshastry-lineal-kiranshastry-1" /></a>
          </div>
          <div className="hosted-by">
            <h3>HOSTED BY</h3>
            <div className="host">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                <img src={eventData.organiser_image_url} alt="Host" />
                <p><strong>{eventData.organiser_name}</strong></p>
              </div>
              <div className="event-description text-sm" dangerouslySetInnerHTML={{ __html: eventData.organiser_info }} />
              <div>
                <span className='text-xl'>Contact Us On</span>
                <div className='flex flex-row'>
                  <a href={eventData.organizer_facebook_url}><img src="https://dev.konfhub.com/img/facebook-share.svg" alt="facebook" width="29" height="29" /></a>
                  <a href={eventData.organizer_twitter_url}><img src="https://dev.konfhub.com/img/twitter-pro-black.svg" alt="twitter" width="29" height="29" /></a>
                  <a href={eventData.organizer_linkedin_url}><img src="https://dev.konfhub.com/img/linkedin-share.svg" alt="linkedin" width="29" height="29" /></a>
                  <a href={eventData.organiser_website}><img src="https://dev.konfhub.com/img/website-black.svg" alt="website-black" width="29" height="29" /></a>
                  <a href={"mailto:" + eventData.organiser_email}><img src="https://dev.konfhub.com/img/mail-share.svg" alt="mail-share" width="29" height="29" /></a>
                  <a href="tel:+919988776655"><img src="https://dev.konfhub.com/img/call-share.svg
" alt="" className="phone-number" width="29" height="29" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

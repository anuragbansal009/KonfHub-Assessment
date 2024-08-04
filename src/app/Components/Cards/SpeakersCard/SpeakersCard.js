/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './SpeakersCard.css'

function SpeakersCard({ speakerDetails }) {
  return (
    <div className='flex align-center flex-wrap gap-4'>
      {speakerDetails?.map((speaker) => (
        <div className='rounded-md border border-[#cacaca] p-[12px] flex flex-row w-[33%]' key={speaker.speaker_order}>
          <img className='cursor-pointer rounded-sm max-h-32 mr-5' src={speaker.image_url} alt={speaker.name} />
          <div className='flex flex-col justify-center'>
            <span className='cursor-pointer font-bold'>{speaker.name}</span>
            <div className='text-base py-1 font-light'>{speaker.designation}</div>
            <div className='text-sm py-1 font-medium'>{speaker.organisation}</div>
            <div className='flex align-center gap-2'>
              <a href={speaker.facebook_url}><img width={20} height={20} key={`facebook-${speaker.name}`} src="https://dev.konfhub.com/img/facebook-share.svg" alt={`facebook-${speaker.name}`} /></a>
              <a href={speaker.twitter_url}><img width={20} height={20} key={`twitter-${speaker.name}`} src="https://dev.konfhub.com/img/twitter-pro-black.svg" alt={`twitter-${speaker.name}`} /></a>
              <a href={speaker.linkedin_url}><img width={20} height={20} key={`linkedin-${speaker.name}`} src="https://dev.konfhub.com/img/linkedin-share.svg" alt={`linkedin-${speaker.name}`} /></a>
              <a href={speaker.website_url}><img width={20} height={20} key={`website-${speaker.name}`} src="https://dev.konfhub.com/img/website-black.svg" alt={`website-${speaker.name}`} /></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SpeakersCard

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './WorkShopCards.css'
import moment from 'moment/moment'
function WorkShopCards({ workshopDetails }) {
  return (
    <div className='flex flex-row'>
      {workshopDetails?.map((workshop) => (
        <div className='w-[33%] rounded-md border border-[#cacaca] p-[12px] justify-between mx-2' key={workshop.workshop_title}>
          <div className='flex flex-col px-1 justify-between'>
            <div className="flex-auto flex flex-col justify-start gap-3">
              <img className='workshop_topic_img_url' src={workshop.workshop_banner_url} alt={workshop.workshop_title} />
              <div className='font-semibold text-xl' dangerouslySetInnerHTML={{ __html: workshop.workshop_title }}></div>
            </div>
            
            <div className='flex-auto'>
              <div className='flex align-center gap-2 py-5'><span class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 18" }}>
                calendar_today
              </span>{moment.utc(workshop.start_timestamp).local().format('MMM Do, YYYY h:mm A') + " IST"}</div>
              <div className='flex w-full justify-between align-center self-end'>
                <abbr title={workshop.workshop_speakers[0].name}><img className='w-[32px] h-[32px]' style={{ borderRadius: "50%" }} src={workshop.workshop_speakers[0].image_url} alt={workshop.workshop_speakers[0].name} /></abbr>
                <button className='view_details_btn'>View Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkShopCards
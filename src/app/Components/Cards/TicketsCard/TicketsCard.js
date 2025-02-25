import React from 'react'
import './TicketsCard.css'
function TicketsCard({ ticketPlanDetails }) {
  return (
    <div>
      {ticketPlanDetails?.map((ticket) => (
        <div className='ticket_card' key={ticket.id}>
          <p className='ticket_plan_type'>{ticket.ticket_plan_type}</p>
          <p className='ticket_description'>{ticket.ticket_description}</p>
          <a className='ticket_venue flex flex-row' href={"https://www.google.com/maps/search/?api=1&query=" + ticket.ticket_venue.split(' ').join('+')}><span class="mt-1 material-symbols-outlined">
            location_on
          </span> {ticket.ticket_venue}</a>
          <p className='ticket_additional'>{ticket.ticket_additional_heading}</p>
          <strong className='ticket_timestamp'>{ticket.ticket_timestamp}</strong>
          <div className='ticket_plan'>
            <span className='ticket_type'>{ticket.ticket_type}</span>
            <button className='ticket_register_btn'>{ticket.button_type}</button>
          </div>
        </div>))}
    </div>
  )
}

export default TicketsCard
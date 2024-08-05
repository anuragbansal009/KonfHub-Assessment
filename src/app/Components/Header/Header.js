import React from 'react'
import './Header.css'
function Header({ eventData }) {
  return (
    <div className="header-align">
      <img src={eventData.navbar_icon} alt="KonfHub Logo" height={50} width={100} />
      <span class="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
        person
      </span>
    </div>
  )
}

export default Header
import React from 'react'
import './Ticket.css'

function Ticket() {
  return (
    <div>
      <div className="cardWrap">
  <div className="card cardLeft">
    <h1>Easy <span>BOOK</span></h1>
    <div className="title">
      <h2>Taj Mahal</h2>
      <span>UNESCO World Heritage</span>
    </div>
    <div className="name">
      <h2>Agra,Uttar Pradesh</h2>
      <span>Gyan Ratan</span>
    </div>
    <div className="seat">
      <h2>5</h2>
      <span>People</span>
    </div>
    <div className="time">
      <h2>13/03/2022</h2>
      <span>Date</span>
    </div>
    
  </div>
  <div className="card cardRight">
    <div className="eye"></div>
    <div className="number">
      <h3>5</h3>
      <span>People</span>
    </div>
    <div className="barcode">
    </div>
  </div>

</div>
    </div>
  )
}

export default Ticket
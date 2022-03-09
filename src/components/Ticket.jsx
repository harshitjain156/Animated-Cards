import React from 'react'
import './Ticket.css'

function Ticket() {
  return (
    <div>
      <div className="container">
<h1>Events</h1>
  <div className="row">
    <article className="card fl-left">
      <div className="date">
        <time datetime="23th feb">
          <span>23</span><span>feb</span>
        </time>
      </div>
      <div className="card-cont">
        <small>dj khaled</small>
        <h3>live in sydney</h3>
        <div className="even-date">
         <i className="fa fa-calendar"></i>
         <time>
           <span>wednesday 28 december 2014</span>
           <span>08:55pm to 12:00 am</span>
         </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker"></i>
          <p>
            nexen square for people australia, sydney
          </p>
        </div>
        <a href="#">tickets</a>
      </div>
    </article>
    <article className="card fl-left">
      <div className="date">
        <time datetime="23th feb">
          <span>23</span><span>feb</span>
        </time>
      </div>
      <div className="card-cont">
        <small>dj khaled</small>
        <h3>corner obsest program</h3>
        <div className="even-date">
         <i className="fa fa-calendar"></i>
         <time>
           <span>wednesday 28 december 2014</span>
           <span>08:55pm to 12:00 am</span>
         </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker"></i>
          <p>
            nexen square for people australia, sydney
          </p>
        </div>
        <a href="#">tickets</a>
      </div>
    </article>
  </div>
  <div className="row">
    <article className="card fl-left">
      <div className="date">
        <time datetime="23th feb">
          <span>23</span><span>feb</span>
        </time>
      </div>
      <div className="card-cont">
        <small>dj khaled</small>
        <h3>music kaboom festivel</h3>
        <div className="even-date">
         <i className="fa fa-calendar"></i>
         <time>
           <span>wednesday 28 december 2014</span>
           <span>08:55pm to 12:00 am</span>
         </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker"></i>
          <p>
            nexen square for people australia, sydney
          </p>
        </div>
        <a href="#">booked</a>
      </div>
    </article>
    <article className="card fl-left">
      <div className="date">
        <time datetime="23th feb">
          <span>23</span><span>feb</span>
        </time>
      </div>
      <div className="card-cont">
        <small>dj khaled</small>
        <h3>hello dubai festivel</h3>
        <div className="even-date">
         <i className="fa fa-calendar"></i>
         <time>
           <span>wednesday 28 december 2014</span>
           <span>08:55pm to 12:00 am</span>
         </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker"></i>
          <p>
            nexen square for people australia, sydney
          </p>
        </div>
        <a href="#">cancel</a>
      </div>
    </article>
  </div>

  
</div>
    </div>
  )
}

export default Ticket
import React from 'react'
import './Card.css';
import he from '../components/he.jpg';

function Card() {


    
  return (
    <div>
        <div className="box">

            <div className="front ">

                <img src={he} alt='hello' height='250' width='300' />

            </div>

            <div className="back">

                <h1>UTTAR PRADESH</h1>

            </div>

        </div>

        <div className="box">

            <div className="front ">

                <img src={he} alt='hello' height='250' width='300' />

            </div>

            <div className="back">

                <h1>UTTAR PRADESH</h1>

            </div>

        </div>

        <div className="box">

            <div className="front ">

                <img src={he} alt='hello' height='250' width='300' />

            </div>

            <div className="back">

                <h1>UTTAR PRADESH</h1>

            </div>

        </div>

        <div className="box">

            <div className="front ">

                <img src={he} alt='hello' height='250' width='300' />

            </div>

            <div className="back">

                <h1>UTTAR PRADESH</h1>

            </div>

        </div>

        
        
    </div>
  )
}

export default Card
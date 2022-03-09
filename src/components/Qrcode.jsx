import React from 'react'

export default function Qrcode() {
    
    let Hello="Gyan BHai";
    
    return (
        <div>
            <img src={`https://chart.apis.google.com/chart?cht=qr&chs=250x250&chl=${Hello}&choe=UTF-8`} />
        </div>
    )
}

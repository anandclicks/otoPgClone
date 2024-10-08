import React from 'react'

const ShowCase = () => {
  return (
    <div className='ShowCase '>
      <h3 className='showCaseTitle'>We are India’s Most Celebrated <span>Coliving</span> Spaces</h3>
      <div className="data">
        <div className="numberBox">
          <span>5000+</span>
          <p>Delighted <g className='mobileHiddenText'>Customer</g></p>
        </div>
        <div className="numberBox">
          <span>210+</span>
          <p><g className='mobileHiddenText'>Oto </g>Habitats</p>
        </div>
        <div className="numberBox">
          <span>5+</span>
          <p>Cities<g className='mobileHiddenText'>& continuing</g></p>
        </div>
      </div>
    </div>
  )
}

export default ShowCase

import React from 'react'

const HeroOne = () => {
  return (
    <div className=''>
    {/* hero one  */}
    <div className='sectionOne '>
      {/* left side or polygon side  */}
      <div className="sectionOneLeft polygonShape">
        <img src="\Herosectiononeimages\sectionone.png" alt="" />
        <div className="ploygon"></div>
      </div>
      {/* text side  */}
      <div className="sectionOneRight">
        <div className="box">
          <h2 className='sectionTitle'>Enjoy a warm and welcoming community where you <span>feel right at home from day one</span></h2>
          <div className="">
            <h3 className='MainPoint'>Friendly</h3>
            <p className='subPoint'>Environment</p>
          </div>
        </div>
      </div>
    </div>
    {/* hero two  */}
    <div className='sectionTwo'>
      {/* text side  */}
      <div className="sectionTwoLeft">
        <div className="box">
          <h2 className='sectionTitle'>Skip the paperwork and extra costs—our services <span>arestraightforward with no hidden fees.</span></h2>
          <div className="">
            <h3 className='MainPoint'>Hassle-Free</h3>
            <p className='subPoint'>Brokerage</p>
          </div>
        </div>
      </div>
      {/* right side or polygon side  */}
      <div className="sectionTwoRight polygonShapeTwo">
        <img src="\Herosectiononeimages\sectiontwo.png" alt="" />
        <div className="ploygon "></div>
      </div>
    </div>
    {/* hero three  */}
    <div className='sectionOne '>
      {/* left side or polygon side  */}
      <div className="sectionOneLeft polygonShape">
        <img className='section3rdImg' src="\Herosectiononeimages\sectionthird.png" alt="" />
        <div className="ploygon"></div>
      </div>
      {/* text side  */}
      <div className="sectionOneRight">
        <div className="box">
          <h2 className='sectionTitle'>Relish well-prepared meals and comfortable living spaces, all designed to enhance <span>Easy on
          your daily life.</span></h2>
          <div className="">
            <h3 className='MainPoint'>Brokerage</h3>
            <p className='subPoint'>Accommodation</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroOne

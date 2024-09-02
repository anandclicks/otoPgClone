import React from 'react'

const NopropertyFound = () => {
  return (
    <div className='propertyNotFountMain'>
      <div className="notFountImg">
        <img src="public\logo\no-stays-found.png" alt="" />
      </div>
      {/* form  */}
      <div className="notFoundForm">
        <h2><span>Sorry</span> No Stays Found!</h2>
        <p className='dipsOFnOfoundForm'>Please enter the Name and Mobile Number. <br /> We will get in touch with you super soon!</p>
        <form action="">
          <p className='placeholderOFform'>Name</p>
          <input type="text" />
          <p className='placeholderOFform'>Number</p>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default NopropertyFound

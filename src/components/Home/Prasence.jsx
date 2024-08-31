import React from 'react'
import { Link } from 'react-router-dom'

const Prasence = () => {
  return (
    <div className="mainWrapperDiv ">
    <div className='prasenceWrapper'>
      {/* noida  */}
      <Link to={'/noida'} className="WrapperDiv">
      <div className='hoverMain'>
          <div className='first '>
            <img className='' src="\cityimages\citypng\noida.svg" alt="" />
          </div>
          <div className='second '>
          <img className='' src="\cityimages\cityimage\Noida.png" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard'>Noida</h4>
      </Link>
      {/* delhi  */}
      <div className="WrapperDiv commingSoon">
      <div className='hoverMain'>
          <div className='first '>
            <img className='' src="\cityimages\citypng\delhi.svg" alt="" />
          </div>
          <div className='second '>
          <img className='' src="\cityimages\cityimage\Delhi.png" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard '>Delhi</h4>
      </div>
      {/* gurugram  */}
      <div className="WrapperDiv commingSoon">
      <div className='hoverMain'>
          <div className='first '>
            <img className='' src="\cityimages\citypng\gurugram.svg" alt="" />
          </div>
          <div className='second '>
          <img className='' src="\cityimages\cityimage\Gurugram.png" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard gurugram'>Gurugram</h4>
      </div>
      {/* ghaziabad noida  */}
      <div className="WrapperDiv commingSoon">
      <div className='hoverMain'>
          <div className='first '>
            <img className='' src="\cityimages\citypng\ghaziabad.svg" alt="" />
          </div>
          <div className='second '>
          <img className='' src="\cityimages\cityimage\ghaziabad.jpg" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard gurugram'>Ghaziabad</h4>
      </div>
      {/* greater noida  */}
      <div className="WrapperDiv commingSoon">
      <div className='hoverMain'>
          <div className='first '>
            <img className='' src="\cityimages\citypng\greaternoida.svg" alt="" />
          </div>
          <div className='second '>
          <img className='' src="\cityimages\cityimage\greaternoida.jpg" alt="" />
          </div>
        </div>
        <h4 className='cityNameofCard greaterNoida'>Greater Noida</h4>
      </div>
    </div>
    </div>
  )
}

export default Prasence

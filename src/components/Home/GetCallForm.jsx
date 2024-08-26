import React, { useContext } from 'react'
import { UserContext } from '../../Context provider/UserContext'

const GetCallForm = () => {
  const {getACallState, handleGetAcALLState} = useContext(UserContext)
  return (
    <div className={`getAcALL ${getACallState ? 'getAcALLVisible' : 'getAcALLInVisible'}`}>
      <h3>Get A <span>Call</span></h3>
      <i onClick={handleGetAcALLState} class="ri-close-large-line getCallFormCloseIcon"></i>
      <form action="">
        <div>
          <p>Your name</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          <p>Moobile Number</p>
          <input type="number" name="" id="" />
        </div>
        <div>
          <p>Email Address</p>
          <input type="email" />
        </div>
        <div>
          <p>Select Room Type</p>
          <select name="" id="">
            <option selected value=""></option>
            <option value="">Single Sharing</option>
            <option value="">Double Sharing</option>
            <option value="">Triple Sharing</option>
          </select>
        </div>
        <input className='getcallsubmitbtn' type="Submit" value={'Submit'} />
      </form>
    </div>
  )
}

export default GetCallForm

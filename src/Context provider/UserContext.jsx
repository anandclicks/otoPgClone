import { createContext, useState } from "react";
import {AllPgDetails} from '../AllPgData/PgDetails'
// import AllPgDetails from "../AllPgData/PgDetails";


export const UserContext = createContext({})

export const UserContextProvider = ({children})=> {
  // find pg form handling 
  const [fromStatus, setfromStatus] = useState(false)
  const findPgFormHandler = ()=> {
    setfromStatus(prev => !prev)
  }





  // data filtering 
  const [dataForMap, setdataForMap] = useState(AllPgDetails)
  const hightToLOwDataHandle = ()=> {
    const filteredData = [...AllPgDetails].sort((a,b)=> a.singleSharingPrice - b.singleSharingPrice)
    setdataForMap(filteredData)
  }
  const LOwtoHighDataHandle = ()=> {
    const filteredData = [...AllPgDetails].sort((a,b)=>  b.singleSharingPrice - a.singleSharingPrice)
    setdataForMap(filteredData)
  }





  // data sorting 
const SingleSharingHandle = () => {
  let filteredData = []
  for (let i = 0; i < AllPgDetails.length; i++) {
    const element = AllPgDetails[i];
    if(element.privatRoom) {
      filteredData.push(element)
    }
  }
  setdataForMap(filteredData)
}

const doubleSharingHandle = () => {
  let filteredData = []
  for (let i = 0; i < AllPgDetails.length; i++) {
    const element = AllPgDetails[i];
    if(element.DoubleSharing) {
      filteredData.push(element)
    }
  }
  setdataForMap(filteredData)
}

const tripleSharingHandle = () => {
  let filteredData = []
  for (let i = 0; i < AllPgDetails.length; i++) {
    const element = AllPgDetails[i];
    if(element.TripleSharing) {
      filteredData.push(element)
    }
  }
  setdataForMap(filteredData)
}



const handleRange = (value) => {
  let filteredData = [];
  const numericValue = Number(value); // Convert value to a number

  for (let i = 0; i < AllPgDetails.length; i++) {
    const element = AllPgDetails[i];
    if (numericValue < element.doubleSharingPrice && element.doubleSharingPrice < 20000) {
     
      filteredData.push(element);
    }
  }

  setdataForMap(filteredData);
}





  // get a call form handling
  const [getACallState, setgetACallState] = useState(false)
  const handleGetAcALLState = ()=> {
   
    setgetACallState(prev => !prev)
  }
  

  // spacial offer popup 
  const [spacialOffer, setspacialOffer] = useState(false)
  const handleSpacialOfferPopup = ()=> {
    setspacialOffer(prev => !prev)
  }
  return (
    <>
    <UserContext.Provider value={{fromStatus,
       findPgFormHandler,
       dataForMap,
       hightToLOwDataHandle,
       LOwtoHighDataHandle,
       handleGetAcALLState,
       SingleSharingHandle,
       doubleSharingHandle,
       tripleSharingHandle,
       getACallState,
       handleRange,
       spacialOffer,
       handleSpacialOfferPopup
       }}>
    {children}
    </UserContext.Provider>
    </>
  )
}
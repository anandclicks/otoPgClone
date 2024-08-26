import { createContext, useState } from "react";
import {AllPgDetails} from '../AllPgData/PgDetails'


export const UserContext = createContext({})

export const UserContextProvider = ({children})=> {
  // find pg form handling 
  const [fromStatus, setfromStatus] = useState(false)
  const findPgFormHandler = ()=> {
    setfromStatus(prev => !prev)
  }
  // data filtrring 
  const [dataForMap, setdataForMap] = useState(AllPgDetails)
  const hightToLOwDataHandle = ()=> {
    const filteredData = [...AllPgDetails].sort((a,b)=> a.singleSharingPrice - b.singleSharingPrice)
    setdataForMap(filteredData)
  }
  const LOwtoHighDataHandle = ()=> {
    const filteredData = [...AllPgDetails].sort((a,b)=>  b.singleSharingPrice - a.singleSharingPrice)
    setdataForMap(filteredData)
  }
  // get a call form handling
  const [getACallState, setgetACallState] = useState(false)
  const handleGetAcALLState = ()=> {
    setgetACallState(prev => !prev)
  }
  
  return (
    <>
    <UserContext.Provider value={{fromStatus, findPgFormHandler,dataForMap, hightToLOwDataHandle, LOwtoHighDataHandle, handleGetAcALLState,getACallState}}>
    {children}
    </UserContext.Provider>
    </>
  )
}
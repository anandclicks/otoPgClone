import { useState } from 'react'

import './App.css'
import './Responsive.css'
import PgOne from './components/PgAllComponents/PgOne'
import Home from './components/Home/Home'
import { UserContext, UserContextProvider } from './Context provider/UserContext'
import { Route, Routes } from 'react-router-dom'
import { AllPgDetails } from './AllPgData/PgDetails'
import Noida from './components/All pg cards/Noida'


function App() {
 
  return (
    <>
    {/* font awsom cdn  */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    {/* remix icon cdn  */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css" referrerPolicy="no-referrer" />
    {/* all conponents  */}
    <UserContextProvider>
      <Routes>
        {/* index routeing  */}
        <Route index path='/' element={<><Home/></>}/>
        {/* all pg route  */}
        <Route path='/noida' element={<><Noida/></>} />
        {/* pg route  */}
        <Route path='/noida/oto-capital'
               element={<>
                         <PgOne
                          pgTitle={AllPgDetails[0].pgTitle}
                          pgLocation={AllPgDetails[0].pgLocation}
                          mapUrl={AllPgDetails[0].mapUrl}
                          imageUrl={AllPgDetails[0].imageUrl}
                          singleSharingPrice={AllPgDetails[0].singleSharingPrice}
                          doubleSharingPrice={AllPgDetails[0].doubleSharingPrice}
                          tripleSharingPrice={AllPgDetails[0].tripleSharingPrice}
                          liveLocationUrl={AllPgDetails[0].liveLocationUrl}
                          />
                          </>} />
        <Route path='/noida/royal-town-sector45'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[1].pgTitle}
                        pgLocation={AllPgDetails[1].pgLocation}
                        mapUrl={AllPgDetails[1].mapUrl}
                        imageUrl={AllPgDetails[1].imageUrl}
                        singleSharingPrice={AllPgDetails[1].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[1].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[1].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[1].liveLocationUrl}
                        />
                        </>} />
        <Route path='/noida/scout-house-sector45'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[2].pgTitle}
                        pgLocation={AllPgDetails[2].pgLocation}
                        mapUrl={AllPgDetails[2].mapUrl}
                        imageUrl={AllPgDetails[2].imageUrl}
                        singleSharingPrice={AllPgDetails[2].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[2].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[2].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[2].liveLocationUrl}
                        />
                        </>} />
        <Route path='/noida/oto-bloom-sector45'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[3].pgTitle}
                        pgLocation={AllPgDetails[3].pgLocation}
                        mapUrl={AllPgDetails[3].mapUrl}
                        imageUrl={AllPgDetails[3].imageUrl}
                        singleSharingPrice={AllPgDetails[3].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[3].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[3].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[3].liveLocationUrl}
                        />
                        </>} />
       <Route path='/noida/oto-omega-sector51'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[4].pgTitle}
                        pgLocation={AllPgDetails[4].pgLocation}
                        mapUrl={AllPgDetails[4].mapUrl}
                        imageUrl={AllPgDetails[4].imageUrl}
                        singleSharingPrice={AllPgDetails[4].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[4].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[4].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[4].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-galaxy-sector51'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[5].pgTitle}
                        pgLocation={AllPgDetails[5].pgLocation}
                        mapUrl={AllPgDetails[5].mapUrl}
                        imageUrl={AllPgDetails[5].imageUrl}
                        singleSharingPrice={AllPgDetails[5].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[5].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[5].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[5].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-coastal-sector62'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[6].pgTitle}
                        pgLocation={AllPgDetails[6].pgLocation}
                        mapUrl={AllPgDetails[6].mapUrl}
                        imageUrl={AllPgDetails[6].imageUrl}
                        singleSharingPrice={AllPgDetails[6].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[6].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[6].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[6].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-Township-sector73'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[7].pgTitle}
                        pgLocation={AllPgDetails[7].pgLocation}
                        mapUrl={AllPgDetails[7].mapUrl}
                        imageUrl={AllPgDetails[7].imageUrl}
                        singleSharingPrice={AllPgDetails[7].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[7].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[7].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[7].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-crop-town-sector73'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[8].pgTitle}
                        pgLocation={AllPgDetails[8].pgLocation}
                        mapUrl={AllPgDetails[8].mapUrl}
                        imageUrl={AllPgDetails[8].imageUrl}
                        singleSharingPrice={AllPgDetails[8].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[8].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[8].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[8].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-white-house-sector104'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[9].pgTitle}
                        pgLocation={AllPgDetails[9].pgLocation}
                        mapUrl={AllPgDetails[9].mapUrl}
                        imageUrl={AllPgDetails[9].imageUrl}
                        singleSharingPrice={AllPgDetails[9].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[9].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[9].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[9].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-royal-win-sector104'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[10].pgTitle}
                        pgLocation={AllPgDetails[10].pgLocation}
                        mapUrl={AllPgDetails[10].mapUrl}
                        imageUrl={AllPgDetails[10].imageUrl}
                        singleSharingPrice={AllPgDetails[10].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[10].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[10].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[10].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-royal-win2-sector104'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[11].pgTitle}
                        pgLocation={AllPgDetails[11].pgLocation}
                        mapUrl={AllPgDetails[11].mapUrl}
                        imageUrl={AllPgDetails[11].imageUrl}
                        singleSharingPrice={AllPgDetails[11].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[11].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[11].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[11].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-expo-primium-sector128'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[12].pgTitle}
                        pgLocation={AllPgDetails[12].pgLocation}
                        mapUrl={AllPgDetails[12].mapUrl}
                        imageUrl={AllPgDetails[12].imageUrl}
                        singleSharingPrice={AllPgDetails[12].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[12].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[12].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[12].liveLocationUrl}
                        />
                        </>} />
      <Route path='/noida/oto-expressway-sector128'
               element={<>
                        <PgOne
                        pgTitle={AllPgDetails[13].pgTitle}
                        pgLocation={AllPgDetails[13].pgLocation}
                        mapUrl={AllPgDetails[13].mapUrl}
                        imageUrl={AllPgDetails[13].imageUrl}
                        singleSharingPrice={AllPgDetails[13].singleSharingPrice}
                        doubleSharingPrice={AllPgDetails[13].doubleSharingPrice}
                        tripleSharingPrice={AllPgDetails[13].tripleSharingPrice}
                        liveLocationUrl={AllPgDetails[13].liveLocationUrl}
                        />
                        </>} />
      </Routes>
    </UserContextProvider>
    
     
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import PgOne from './components/PgAllComponents/PgOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <PgOne
      pgTitle={'OTO capital '}
      pgLocation={'Near by - OM deiry Gali number - 03'}
      mapUrl={'https://maps.app.goo.gl/19w1FBvJNUdqp7p8A'}
      imageUrl={'/Allcitiesindividualpgs/otocapitalsec44/'}
      singleSharingPrice={'17,000'}
      doubleSharingPrice={'10,000'}
      tripleSharingPrice={'Not Avalable'}
      liveLocationUrl={'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.5881751808897!2d77.3521968754979!3d28.552095675708753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzA3LjUiTiA3N8KwMjEnMTcuMiJF!5e0!3m2!1sen!2sin!4v1724478682678!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'}
      />
    </>
  )
}

export default App

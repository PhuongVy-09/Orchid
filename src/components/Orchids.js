import React from 'react'
import OrchidList from './OrchidsList'



function OrchidFeature(props) {

  return (
    <div>
      
      <OrchidList orchidsList={OrchidList}/>
    </div>
  )
}

OrchidFeature.propTypes = {}
export default OrchidFeature




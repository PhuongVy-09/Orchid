import React from 'react'
import OrchidList from './OrchidsList'
import { Orchid } from '../shared/Orchid'

function OrchidFeature(props) {

  return (
    <div>
      <OrchidList orchidsList={Orchid}/>
    </div>
  )
}

OrchidFeature.propTypes = {}
export default OrchidFeature




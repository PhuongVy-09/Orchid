import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Detail from '../OrchidsDetail'
import './styles.scss'
Orchid.propTypes = {
    Orchid: PropTypes.object.isRequired,
}
function Orchid({ orchid }) {

    return (
        <div className='orchid'>
            <div className='orchid__img'>
                <img src={orchid.img} alt={orchid.name} />
            </div>
            <h4 className='player__name'>{orchid.name}</h4>
            <h4 className='player__club'>{orchid.club}</h4>
            <div className='player__detail'>
                <Link className='player__link' to={`/detail/${orchid.id}`}>Detail</Link>
            </div>

        </div>
    )
}

Orchid.propTypes = {}

export default Orchid

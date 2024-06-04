import React from 'react'

import { Link } from 'react-router-dom'

import './styles.scss'

function OrchidsItem({ orchid }) {

    return (
        <div className='orchid'>
           <div className='orchid__column'>
                <div className='orchid__card'>
                <div className='orchid__img'>
                <img src={orchid.img} alt={orchid.name} width={200} height={200}/>
                </div>
            <h4 className='orchid__name'>{orchid.name}</h4>
            <h4 className='orchid__origin'>{orchid.club}</h4>
            <div className='orchid__detail'>
                <Link className='orchid__link' to={`/detail/${orchid.id}`}>Detail</Link>
            </div>
                </div>

           </div>

        </div>
    )
}

OrchidsItem.propTypes = {}

export default OrchidsItem


import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import Orchid from '../OrchidsItem'

OrchidList.propTypes = {
    orchidsList: PropTypes.array.isRequired,
}

function OrchidList(props) {
    const { orchidsList } = props;
    return (
        <ul className="orchid-list">
            {orchidsList.map(orchid => (
                <li key={orchid.id}>
                    <Orchid orchid={orchid} />
                </li>
            ))}
        </ul>
    )

}



OrchidList.propTypes = {}

export default OrchidList

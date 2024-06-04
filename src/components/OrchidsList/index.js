
import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import Orchid from '../Orchids'

OrchidList.propTypes = {
    orchidsList: PropTypes.array.isRequired,
}

function OrchidList(props) {
    const { orchidsList } = props;
    return (
        <ul className="orchid-list">
            {orchidsList.map(orchid => (
                <li key={Orchid.id}>
                    <Orchid orchid={Orchid} />
                </li>
            ))}
        </ul>
    )

}



OrchidList.propTypes = {}

export default OrchidList

import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import { Orchid } from '../../shared/Orchid';
import './styles.scss';

function Detail(props) {
    const userName = useParams();
    const orchid = Orchid.find(obj => {
        return obj.id == userName.id;
    });
   
    return (
        <div className='container'>
            <div className='product-card'>
                <div className='badge'>{orchid.name}</div>
                <div className='product-tumb'>
                    <img src={`../${orchid.img}`} alt='' />
                </div>
            </div>
            <div className='product-details'>
                <h4>{orchid.origin}</h4>
                
                <div className='product-bottom-details'>{orchid.category}</div>
            </div>

        </div>
    )
}

Detail.propTypes = {}

export default Detail

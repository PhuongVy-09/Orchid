import React from 'react'
import "./Navigation.scss";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
export default function Navigation() {
    return (
        <div>
            <nav>
                <ul>
                    <li className="active" ><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>

                     <div className="icons">
                     <FavoriteIcon/>
                     <AddShoppingCartIcon/>
                     <PersonIcon/>
                </div> 

                </ul>
            </nav>
        </div>
    )
}

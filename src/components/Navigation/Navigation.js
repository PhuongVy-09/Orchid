import React from 'react'
import "./Navigation.scss";
export default function Navigation() {
    return (
        <div>
            <nav>
                <ul>
                    <li className="active" ><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

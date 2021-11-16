import React from 'react'
import logoNCC from '../assets/images/logoNCC 1.png'
import CardItem from '../component/Item'
import './index.css'
import image1 from '../assets/images/css-icon 1.png';
import image2 from '../assets/images/html-icon 1.png';
import image3 from '../assets/images/url-icon 1.png';
const Home = () => {
    return (
        <div className="home">
            <header className="header">
                <img src={logoNCC} alt="" />
            </header>
            <div className="banner">
                <h3>Lorem ipsum dolor sit asmet?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu.</p>
            </div>
            <div className="main-content">
                <CardItem image={image1} />
                <CardItem image={image2} />
                <CardItem image={image3} />
            </div>
        </div>
    )
}

export default Home

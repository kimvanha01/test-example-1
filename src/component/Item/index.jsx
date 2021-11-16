import React from 'react'
import './index.scss'
const CardItem = ({ image }) => {
    return (
        <div className="card">
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className="content-card">
                <img src={image} alt="image" />
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptate adipisci deserunt doloremque magni, molestiae aperiam similique commodi, explicabo quas nostrum necessitatibus perspiciatis temporibus.</p>
        </div>
    )
}

export default CardItem

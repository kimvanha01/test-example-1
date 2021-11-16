import React from 'react'
import './index.scss'
const MainLayout = ({ children }) => {
    return (
        <div className="container">
            <div className="sidebar">
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='content'>
                {children}
            </div>
            <footer className="footer">
                <p>Copyright © 2021</p>
            </footer>

        </div>
    )
}

export default MainLayout

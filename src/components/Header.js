import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({ children }) => {
    return (
        <div>
            <header className='header'>
                
            <img src='/PSS_Icon.png' alt='PSS Icon' className='logo-left'/>
                <div className='head-text'>
                <Link to='/'><h1>Palmetto Security Solutions</h1></Link>
               
                <h5>"The Meek Shall Inherit the Earth"</h5>
                </div>
            <img src='/PSS_Icon.png' alt='PSS Icon' className='logo-right'/>
            </header>
            
        </div>
    )
}

export default Header
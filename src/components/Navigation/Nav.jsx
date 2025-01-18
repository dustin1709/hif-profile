import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Nav.css';

function Nav() {

    // mobile navbar variables
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // close navbar
    const closeMenu = () => setClick(false)

    // change color navbar when scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color || click ? 'header add-bg' : 'header'}>
            <nav className='navbar'>
                <Link to='home' className='logo cursor-pointer'>
                    <img src={'/HIF.png'} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: 'black' }} />)
                        : (<FaBars size={20} style={{ color: 'black' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>HOME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about-us' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>ABOUT</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='real-estate-development' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>REAL ESTATE DEVELOPMENT</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='property-management' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>PROPERTY MANAGEMENT</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>PROJECTS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='education-consulting' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>EDUCATION CONSULTING</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='golden-visa-immigration' spy={true} smooth={true} offset={-110} duration={500} onClick={closeMenu}>GOLDEN VISA IMMIGRATION</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav

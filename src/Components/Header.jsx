import React, { useState, useEffect } from 'react';
import { MdNightsStay } from 'react-icons/md';
import { FaSun } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [theme, setTheme] = useState('light-theme');

    const toggleDarkMode = () => {
        const mode = theme === "light-theme" ? "dark-theme" : "light-theme";
        setTheme(mode);
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])


    const handleMenu = () => {
        setShowMenu((prevValue) => !prevValue)
    }

    return (
        <header className={`header ${showMenu && "header-mobile-height"}`} id="#header" >
            <div className="container flex">
                <div className="nav-logo flex">Omar Khan</div>
                <div className={`nav-menu ${showMenu && "mobile-nav-menu"}`}>

                    <ul className="nav-items">
                        <li><a href="#header" className="nav-link">Home</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#skill" className="nav-link">Skills</a></li>
                        <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>

                    {/* Darkmode button */}
                    <div className="darkToggle">
                        {theme === "dark-theme" ? <FaSun onClick={toggleDarkMode} color="yellow" /> :
                            <MdNightsStay onClick={toggleDarkMode} />}
                    </div>

                </div>

                {/* hamburger menu */}
                <div className="hamburger-menu" >
                    {showMenu && <IoMdClose className="cross-icon" color="red" onClick={handleMenu} />}
                    {!showMenu && <GiHamburgerMenu className="menu-icon" onClick={handleMenu} />}
                </div>

            </div>
        </header>
    )
}

export default Header
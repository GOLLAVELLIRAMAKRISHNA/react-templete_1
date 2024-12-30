import React from 'react'
import navbar from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={navbar.container}>
            <h1><i className="fa-brands fa-joomla"></i>LOGO</h1>
            <div className={navbar.navigation}>
                <ul className={navbar.navList}>
                    <li className={navbar.navItem}><i className="fa-brands fa-pied-piper-pp"></i></li>
                    <li className={navbar.navItem}>home</li>
                    <li className={navbar.navItem}>about</li>
                    <li className={navbar.navItem}>gallery</li>
                    <li className={navbar.navItem}>premimum</li>
                    <li className={navbar.navItem}>docs</li>
                    <li className={navbar.navItem}>support</li>
                </ul>
                <button className={navbar.btn}>contact us</button>
            </div>
        </div>
    )
}

export default Navbar
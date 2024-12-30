import React from 'react'
import header from './Header.module.css'
import Navbar from '../navbar/Navbar'

const Header = () => {
    return (
        <div className={header.container}>
            <Navbar />
            <div className={header.header_container}>
                <h1>Website Landing Page<br /> Wireframe</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis inventore <br />doloremque
                    laborum ad optio provident neque, sequi quo placeat iure nisi ab,<br /> quasi accusantium facilis
                    eaque quas exercitationem officia?
                </p>
                <div className={header.input_container}>
                    <input type="text" placeholder='Search' />
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header
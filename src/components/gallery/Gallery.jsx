import React from 'react'
import gallery from './Gallery.module.css'
import img from '../../assests/img2-removebg-preview.png'

const Gallery = () => {
    return (
        <div className={gallery.gallery_container}>
            <div id={gallery.one} className={gallery.grids}>
                <img src={img} alt="" />
                <h2>Picture One</h2>
            </div>
            <div id={gallery.two} className={gallery.grids}>
                <img src={img} alt="" />
                <h2>Picture Two</h2>
            </div>
            <div id={gallery.three} className={gallery.grids}>
                <img src={img} alt="" />
                <h2>Picture Three</h2>
            </div>
            <div id={gallery.four} className={gallery.grids}>
                <img src={img} alt="" />
                <h2>Picture Four</h2>
            </div>
        </div>
    )
}

export default Gallery
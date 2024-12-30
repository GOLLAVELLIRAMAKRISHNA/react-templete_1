import React from 'react'
import feature from './Feature.module.css'
import img from '../../assests/img2-removebg-preview.png'
const Feature = () => {
    return (
        <div className={feature.feature_container}>
            <div className={feature.feature_left}>
                <h1>Features</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam omnis enim sapiente praesentium eius, provident ullam officiis est sed. Optio ad facere odit eaque sequi, voluptatibus ipsa error.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam omnis enim sapiente praesentium eius, provident ullam officiis est sed. Optio ad facere odit eaque sequi, voluptatibus ipsa error.</p>
            </div>
            <div className={feature.feature_right}>
                <div className={feature.card}>
                    <img src={img} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus minima maiores distinctio sapiente ea voluptates.</p>
                </div>
                <div className={feature.card}>
                    <img src={img} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In possimus minima maiores distinctio sapiente ea voluptates.</p>
                </div>
            </div>
        </div>
    )
}

export default Feature
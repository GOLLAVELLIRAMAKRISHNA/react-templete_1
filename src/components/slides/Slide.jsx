import React from 'react'
import slide from './Slide.module.css'

const Slide = () => {
    return (
        <div className={slide.container}>
            <div className={slide.left_btn}>
                <i className="fa-solid fa-caret-left"></i>
            </div>
            <div className={slide.sliders}>
                <div className={slide.slide_card}>
                    <h1>Feature One</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto veritatis quos molestias reiciendis, cupiditate repellat.</p>
                </div>
                <div className={slide.slide_card}>
                    <div className={slide.img_icon}>
                        <i className="fa-solid fa-image" aria-hidden="true"></i>
                    </div>
                    <h1>lorem ipsum doler </h1>
                    <button className={slide.btn}>
                        Enroll Now
                    </button>
                </div>
                <div className={slide.slide_card}>
                    <h1>Feature One</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto veritatis quos molestias reiciendis, cupiditate repellat.</p>
                </div>
            </div>
            <div className={slide.right_btn}>
                <i className="fa-solid fa-caret-right"></i>
            </div>
        </div>
    )
}

export default Slide
import React from 'react'
import step from './Step.module.css'

const Step = () => {
    return (
        <div className={step.steps_container}>
            <div className={step.card_container}>
                <div className={step.card}>
                    <div className={step.num}><div>1</div></div>
                    <div className={step.card_content}>
                        <h2>step 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptas iste voluptate quibusdam corrupti sunt.</p>
                    </div>
                </div>
                <div className={step.card}>
                <div className={step.num}><div>2</div></div>
                    <div className={step.card_content}>
                        <h2>step 2</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptas iste voluptate quibusdam corrupti sunt.</p>
                    </div>
                </div>
                <div className={step.card}>
                <div className={step.num}><div>3</div></div>
                    <div className={step.card_content}>
                        <h2>step 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptas iste voluptate quibusdam corrupti sunt.</p>
                    </div>
                </div>
                <div className={step.line}></div>
            </div>
            <div className={step.btn}><h1><i className="fa-regular fa-circle-play"></i>Watch Now!</h1></div>
        </div>
    )
}

export default Step
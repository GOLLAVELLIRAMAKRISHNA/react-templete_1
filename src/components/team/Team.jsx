import React from 'react'
import team from './Team.module.css'
import img from '../../assests/img2-removebg-preview.png'

const Team = () => {
    return (
        <div className={team.container}>
            <div className={team.left_container}>
                <h1>Team Materials</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in voluptates exercitationem atque, ipsum adipisci, doloremque enim accusantium impedit temporibus unde. Maiores tenetur sapiente nesciunt omnis, suscipit corrupti ducimus officiis.</p>
                <p className={team.top_line}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in voluptates exercitationem atque, ipsum adipisci, doloremque enim accusantium impedit temporibus unde. Maiores tenetur sapiente nesciunt omnis, suscipit corrupti ducimus officiis.</p>
                <button className={team.btn}>See More</button>
            </div>
            <div className={team.right_container}>
                <img src={img} alt='' />
            </div>
        </div>
    )
}

export default Team
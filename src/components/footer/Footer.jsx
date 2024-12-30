import React from 'react'
import footer from './Footer.module.css'

const Footer = () => {
    return (
        <div className={footer.container}>
            <div className={footer.top_container}>
                <div className={footer.left_content}>
                    <h1>Create Your <br />Own Account</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur unde eos saepe explicabo tenetur eius suscipit earum nisi? Consequuntur pariatur corrupti aliquam nobis quae aliquid, perferendis tempora ducimus mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur unde eos saepe explicabo tenetur eius suscipit earum nisi? Consequuntur pariatur corrupti aliquam nobis quae aliquid, perferendis tempora ducimus mollitia?</p>
                    <div className={footer.options}>
                        <label><input type="radio" name='radio' />Annoncement</label>
                        <label><input type="radio" name='radio' />Group</label>
                        <label><input type="radio" name='radio' />Single</label>
                    </div>
                </div>
                <div className={footer.right_form}>
                    <form>
                        <div className={footer.input}>
                            <input type="text" placeholder='First Name' />
                        </div>
                        <div className={footer.input}>
                            <input type="text" placeholder='Last Name' />
                        </div>
                        <div className={footer.input}>
                            <input type="email" placeholder='Email Address' />
                        </div>
                        <div className={footer.input}>
                            <input type="number" placeholder='Age' />
                        </div>
                        <div className={footer.input}>
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
            <div className={footer.bottom_container}>
                <h1><i className="fa-brands fa-joomla"></i>LOGO</h1>
                <p>Powered by <a href="Excelr">@ ExcelR Software Solutions Pvt Ltd</a></p>
            </div>
        </div>
    )
}

export default Footer
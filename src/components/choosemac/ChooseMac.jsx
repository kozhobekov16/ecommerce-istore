import React from 'react'
import iMac from '../../assets/img/macbooks/air-monterey-large_2x.mp4'
import './ChooseMac.scss'
import {NavLink} from 'react-router-dom'

function ChooseMac() {
    return (
        <section className='chooseMac'>
            <div className='description'>
                <h2>Выберите свой Mac.</h2>
                <p>Суперсила. Профессионалов
                </p>
                <NavLink to="/catalog/Mac">Подробнее</NavLink>
            </div>
            <div className="video">
                <video loop muted autoPlay>
                    <source src={iMac} type="video/mp4"/>
                </video>
            </div>
        </section>
)
}
export default ChooseMac
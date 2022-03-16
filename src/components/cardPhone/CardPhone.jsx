import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './CardPhone.module.scss'

function CardPhone({ datas }) {
    const { image, name, price, color } = datas
    return (
        <div className={styles.main}>
            <div className={styles.cards}>
                <div>
                    <img src={image} alt={name} />
                </div>
                <h4>{name}</h4>
                <p>{price}</p>
                <p>{color}</p>
                <NavLink to={`/cardPhone/${name}`}>Подробнее</NavLink>
            </div>
        </div>
    )
}
export default CardPhone
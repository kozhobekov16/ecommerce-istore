import React from 'react'
import { NavLink } from 'react-router-dom'
import empty from '../../assets/img/empty.svg'
import styles from './BasketEmpty.module.scss'

function BasketEmpty() {
    return(
        <div className={styles.empty}>
            <img src={empty} alt="empty"/>
            <h1>
                Ваша корзина пуста
            </h1>
            <h4>
                Самое время добавить в нее что-нибудь
            </h4>
            <NavLink to='/catalog'>Нажми сюда</NavLink>
        </div>
    )
}
export default BasketEmpty
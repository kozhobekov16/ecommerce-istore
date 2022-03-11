import React from 'react'
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
        </div>
    )
}
export default BasketEmpty
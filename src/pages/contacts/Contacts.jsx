import React from 'react'
import styles from './Contacts.module.scss'

function Contacts() {
    return (
        <div className={styles.contacts}>
            <h2>Контакты</h2>
            <h4>Звоните или пишите нам</h4>
            <div className={styles.call}>
                <h5>Наши номера</h5>
                <a href="tel:+996 (555) 802 000">+996 (555) 802 000</a>
                <a href="tel:+996 (505) 802 000">+996 (505) 802 000</a>
            </div>
            <div>
                <h5>
                Наша почта
                </h5>
                <a href="mailto:istorekg@gmail.com">istorekg@gmail.com</a>
            </div>
            <div>
                <h5>График работы</h5>
                <p>Пн - Вс 10:00 - 20:00</p>
            </div>
        </div>
    )
}
export default Contacts
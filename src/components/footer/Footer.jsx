import React from 'react'
import logo from '../../assets/img/istore_logo.png'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.block}>
                <img src={logo} alt="footerLogo" />
                <p>Магазин техники Apple в Бишкеке</p>
                <h5>Режим работы</h5>
                <p>Пн - Вс 10:00 - 20:00</p>
            </div>
            <div className={styles.products}>
                <h5>Продукция</h5>
                <a href="/">
                    Mac
                </a>
                <a href="/">
                    iPhone
                </a>
                <a href="/">
                    Watch
                </a>
                <a href="/">
                    iPad
                </a>
            </div>
            <div className={styles.contacts}>
                <h5>
                    Контакты
                </h5>
                <p>
                    пр. Манаса, 40 (пер. ул. Киевская)
                </p>
                <a href="/">
                    +996 (555) 802 000 +996
                </a>
                <a href="/">
                    +996 (505) 802 000
                </a>
                <a href="/">
                    istorekg@gmail.com
                </a>
            </div>
        </div>
    )
}
export default Footer
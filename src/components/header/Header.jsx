import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './Header.module.scss'
import logo from '../../assets/img/istore_logo.png'
import basket from '../../assets/img/basket.webp'
import { useSelector } from "react-redux";

function Header({ changeTheme , Sun, Moon, change}) {
    const state = useSelector(addcard => addcard.addToCard)
    return (
        <header>
            <div className={styles.toolbar}>
                <NavLink to='/'>
                    <img src={logo} className={styles.logo} alt="logo" />
                </NavLink>
                <p>
                    Магазин техники
                    Apple в Бишкеке
                </p>
                <p>
                    пр. Манаса, 40 (пер. ул. Киевская)
                    Пн - Вс 10:00 - 20:00
                </p>
                <div className={styles.links}>
                    <a href="tel:+996 (555) 802 000">
                        +996 (555) 802 000
                    </a>
                    <a href="tel:+996 (505) 802 000">
                        +996 (505) 802 000
                    </a>
                </div>
                <NavLink to='/basket' className={styles.basket}>
                    <img src={basket} alt="basket" />
                    <span className={styles.count}>{state.length}</span>
                </NavLink>
            </div>
            <ul className={styles.menu}>
                <li>
                    <NavLink to='/'>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/about">О нас</NavLink>
                </li>
                <li>
                    <NavLink to="/catalog">Продукция</NavLink>
                </li>
                <li>
                    <NavLink to="/garantiya">Гарантия</NavLink>
                </li>
                <li>
                    <NavLink to="/credit">В кредит</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Контакты</NavLink>
                </li>
                <li className={styles.theme} onClick={changeTheme}>
                    {change ? <Sun className={styles.sun}/> : <Moon className={styles.mood}/>}
                </li>
            </ul>
        </header>
    )
}

export default Header
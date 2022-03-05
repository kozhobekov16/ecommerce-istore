import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss'
import logo from '../../assets/img/istore_logo.png'

function Header() {
    return (
        <header>
            <div className={styles.toolbar}>
                <NavLink to='/'>
                    <img src={logo} alt="logo"/>
                </NavLink>
                <span>basket</span>
            </div>
            <ul className={styles.menu}>
                <li>
                    <NavLink to='/'>Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/about">О нас</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Продукция</NavLink>
                </li>
                <li>
                    <NavLink to="/g">Гарантия</NavLink>
                </li>
                <li>
                    <a href="">В кредит</a>
                </li>
                <li>
                    <NavLink to="/contacts">Контакты</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header
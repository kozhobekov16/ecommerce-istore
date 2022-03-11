import React from 'react'
import logo from '../../assets/img/istore_logo.png'
import styles from './Footer.module.scss'

function Footer() {
    return(
        <div className={styles.footer}>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Footer
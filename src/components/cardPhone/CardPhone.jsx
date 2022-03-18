import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './CardPhone.module.scss'
import {motion} from "framer-motion";
function CardPhone({datas}) {
    const {image, name, price, color} = datas
    return (
        <div className={styles.main}>
            <div className={styles.cards}>
                <div>
                    <NavLink to={`/cardPhone/${name}`}>
                        <motion.img
                            src={image}
                            whileHover={{scale: 1.1}}
                            alt={name}
                        />
                    </NavLink>
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
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Macbooks.module.scss'
import {motion} from "framer-motion";

const Macbooks = () => {
    const [macbook, setMacbook] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(data => setMacbook(data.macbooks))
    }, [])

    return (
        <div className={styles.main}>
            <h3>Mac</h3>
            <div className={styles.macbooks}>
                {macbook.map(mac => (
                    <div
                        to={`/catalog/macbooks/${mac.name}`}
                        key={mac.id}
                        className={styles.block}>
                        <NavLink to={`/catalog/macbooks/${mac.name}`}>
                            <motion.img
                                src={mac.image}
                                whileHover={{scale: 1.1}}
                                alt={mac.name} />
                        </NavLink>
                        <NavLink to={`/catalog/macbooks/${mac.name}`}>
                            {mac.name}
                        </NavLink>
                        <h5>{mac.proceccor}</h5>
                        <h6>{mac.price}</h6>
                        <NavLink to={`/catalog/macbooks/${mac.name}`}>
                            <p>Подробнее...</p>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Macbooks
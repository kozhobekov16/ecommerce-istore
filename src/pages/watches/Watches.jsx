import React, { useState, useEffect } from 'react'
import styles from './Watches.module.scss'
import { NavLink } from 'react-router-dom'
import {motion} from "framer-motion";

const Watches = () => {

    const [watch, setWatch] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const getadata = await fetch('http://localhost:3000/data.json')
            const resp = await getadata.json()
            setWatch(resp.watches)
        }
        fetchData()
    }, [])

    return (
        <div className={styles.main}>
            <h3>Apple Watch</h3>
            <div className={styles.watches}>
                {watch.map(elem => (
                    <div
                        className={styles.watch}
                        key={`${elem.name}_${elem.price}`}
                    >
                        <motion.img
                            src={elem.image}
                            alt={elem.name}
                            animate={{ x: 2 }}
                        />
                        <h4>{elem.name}</h4>
                        <p>{elem.price}</p>
                        <p>
                            {elem.color}
                        </p>
                        <NavLink to={`/catalog/Watch/${elem.name}`}>
                            Подробнее...
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Watches
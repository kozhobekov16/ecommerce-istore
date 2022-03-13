import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Macbooks.module.scss'

const Macbooks = () => {
    const [macbooks, setMacbooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(data => setMacbooks(data.macbooks))
            .catch(e => console.log(e))
    }, [])

    return (
        <div className={styles.main}>
            <h3>Mac</h3>
            <div className={styles.macbooks}>
                {macbooks.map(mac => (
                    <div key={mac.id} className={styles.block}>
                        <img src={mac.image} alt={mac.name} />
                        <h4>
                            {mac.name}
                        </h4>
                    </div>
                ))}
            </div>
            <NavLink to="/catalog" className={styles.back}>
                Вернуться
            </NavLink>
        </div>
    )
}

export default Macbooks
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Macbooks.module.scss'
import { FaLongArrowAltLeft } from 'react-icons/fa'

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
                    <NavLink
                        to={`/catalog/macbooks/${mac.name}`}
                        key={mac.id}
                        className={styles.block}>
                        <img src={mac.image} alt={mac.name} />
                        <h4>
                            {mac.name}
                        </h4>
                    </NavLink>
                ))}
            </div>
            <NavLink to="/catalog" className={styles.back}>
                <FaLongArrowAltLeft></FaLongArrowAltLeft>
            </NavLink>
        </div>
    )
}

export default Macbooks
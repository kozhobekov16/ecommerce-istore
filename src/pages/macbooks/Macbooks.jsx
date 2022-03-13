import React, { useState, useEffect } from 'react'
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
    )
}

export default Macbooks
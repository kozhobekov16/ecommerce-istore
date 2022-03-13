import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './MacbookDetail.module.scss'

const MacbookDetail = () => {
    const { name } = useParams()
    return (
        <div className={styles.macbookDetail}>
            {name}
        </div>
    )
}

export default MacbookDetail
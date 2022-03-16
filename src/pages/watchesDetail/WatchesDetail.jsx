import React from 'react'
import styles from './WatchesDetail.module.scss'
import { useParams } from 'react-router-dom'

const WatchesDetail = () => {
    const { name } = useParams()
    return (
        <div className={styles.watchesDetail}>
            WatchesDetail
            {name}
        </div>
    )
}

export default WatchesDetail
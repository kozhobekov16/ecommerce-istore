import React from 'react'
import styles from './Catalog.module.scss'
import mac from '../../assets/img/macbooks/neeew_v4BVwYs.webp'
import iiPhone from '../../assets/img/iphons/new.png'
import watch from '../../assets/img/watches/watches.png'

const Catalog = () => {
    const catalogs = [
        {
            image: mac,
            name: 'Mac',
            link: 'Перейти',
            id: 0
        },
        {
            image: iiPhone,
            name: 'iPhone',
            link: 'Перейти',
            id: 1
        },
        {
            image: watch,
            name: 'Watch',
            link: 'Перейти',
            id: 2
        },
    ]
    return (
        <div className={styles.catalog}>
            <h1 className={styles.title}>Каталог</h1>
            <div className={styles.products}>
                {catalogs.map(elem => {
                    return (
                        <div className={styles.block} key={elem.id}>
                            <img src={elem.image} alt={elem.name} />
                            <div className={styles.flex}>
                                <h4>{elem.name}</h4>
                                <a href="/">{elem.link}</a>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Catalog
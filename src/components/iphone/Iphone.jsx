import React from 'react'
import styles from './Iphone.module.scss'
import {CardPhone} from "../../components";

function Iphone({phoneData}) {
    return (
        <div>
            <div className={styles.description}>
                <h2>Выберите свой iPhone</h2>
                <p>Сравните все модели iPhone
                </p>
                <a href="/">больше моделей</a>
            </div>
            <section className={styles.cards}>
                {phoneData.map((item) => {
                    return (
                        <div key={`${item.id}_${item.name}`}>
                            <CardPhone datas={item}/>
                        </div>
                    )
                })}

            </section>
        </div>
    )
}

export default Iphone
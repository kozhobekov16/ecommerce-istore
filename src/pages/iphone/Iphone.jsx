import React, {useState, useEffect} from 'react'
import styles from './Iphone.module.scss'
import {CardPhone} from "../../components";

function Iphone() {
    const [iphones, setIphones] = useState([])

    useEffect(() => {
            async function fetchDB() {
                const fetchData = await fetch('http://localhost:3000/data.json')
                const resp = await fetchData.json()
                setIphones(resp.iPhones)
            }
        fetchDB()
    }, [])

    return (
        <div>
            <section className={styles.cards}>
                {iphones.map((item) => {
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
import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import {Macbooks} from '../../pages'
import { SliderHome, ChooseMac, Iphone} from "../../components";

function Home() {
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
        <div className={styles.homePage}>
            <SliderHome />
            <Iphone phoneData={iphones} />
            <ChooseMac />
            <Macbooks/>
        </div>
    )
}

export default Home
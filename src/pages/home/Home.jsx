import React, {useEffect, useState} from 'react'
import styles from './Home.module.scss'
import {SliderHome, ChooseMac, Iphone} from "../../components";

function Home() {
    const [iphones, setIphones] = useState([])

    useEffect(async () => {
        const fetchData = await fetch('http://localhost:3000/iphones.json')
        const resp = await fetchData.json()
        setIphones(resp.Iphones)
    }, [])

    return (
        <div className={styles.homePage}>
            <SliderHome/>
            <Iphone phoneData={iphones}/>
            <ChooseMac/>
        </div>
    )
}

export default Home
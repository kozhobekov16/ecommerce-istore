import React from 'react'
import styles from './Home.module.scss'
import {Macbooks, Iphone, Watches} from '../../pages'
import { SliderHome, ChooseMac} from "../../components";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"


function Home() {
    return (
        <div className={styles.homePage}>
            <SliderHome />
            <div className={styles.description}>
                <motion.h2
                    animate={{ x: [0, 100, 0] }}
                    transition={{ duration: 2 }}
                >Выберите свой iPhone</motion.h2>
                <p>Сравните все модели iPhone
                </p>
                <NavLink to="/catalog/iphone">больше моделей</NavLink>
            </div>
            <Iphone />
            <ChooseMac />
            <Watches/>
            <Macbooks/>
        </div>
    )
}

export default Home
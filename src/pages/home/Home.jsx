import React from 'react'
import styles from './Home.module.scss'
import {Macbooks, Iphone, Watches} from '../../pages'
import { SliderHome, ChooseMac} from "../../components";
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div className={styles.homePage}>
            <SliderHome />
            <div className={styles.description}>
                <h2>Выберите свой iPhone</h2>
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